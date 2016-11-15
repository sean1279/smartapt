/*
*The MIT License (MIT)
*Copyright (c) 2016 Nicholas Hutchind
*
*Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
*The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*https://opensource.org/licenses/MIT
*/
package me.donaldepignosis.cordova.plugins.streamingmedia.mod;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.widget.ImageView;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;


public class ImageLoadTask extends AsyncTask<Void, Void, Bitmap> {

	private String uri;
	private ImageView imageView;
	private Context context;

	public ImageLoadTask(String uri, ImageView imageView, Context context) {
		this.uri = uri;
		this.imageView = imageView;
		this.context = context;
	}

	@Override
	protected Bitmap doInBackground(Void... params) {
		Bitmap bitmap = null;
		if (uri != null && uri.toLowerCase().startsWith("http")) {
			// Load image from URL
			try {
				URL urlConnection = new URL(uri);
				HttpURLConnection connection = (HttpURLConnection) urlConnection.openConnection();
				connection.setDoInput(true);
				connection.connect();
				InputStream input = connection.getInputStream();
				bitmap = BitmapFactory.decodeStream(input);
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			// Load image from assets
			InputStream istr;
			try {
				istr = context.getAssets().open(uri);
				bitmap = BitmapFactory.decodeStream(istr);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return bitmap;
	}

	@Override
	protected void onPostExecute(Bitmap result) {
		super.onPostExecute(result);
		imageView.setImageBitmap(result);
	}
}
