cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "id": "cordova-plugin-flashlight.Flashlight",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/src/browser/Vibration.js",
        "id": "cordova-plugin-vibration.Vibration",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/aerogear-cordova-oauth2/www/oauth2.js",
        "id": "aerogear-cordova-oauth2.oauth2",
        "pluginId": "aerogear-cordova-oauth2",
        "clobbers": [
            "oauth2"
        ]
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/com.hutchind.cordova.plugins.streamingmedia/www/StreamingMedia.js",
        "id": "com.hutchind.cordova.plugins.streamingmedia.StreamingMedia",
        "pluginId": "com.hutchind.cordova.plugins.streamingmedia",
        "clobbers": [
            "streamingMedia"
        ]
    },
    {
        "file": "plugins/me.donaldepignosis.cordova.plugins.streamingmedia.mod/www/StreamingMedia.js",
        "id": "me.donaldepignosis.cordova.plugins.streamingmedia.mod.StreamingMedia",
        "pluginId": "me.donaldepignosis.cordova.plugins.streamingmedia.mod",
        "clobbers": [
            "streamingMedia"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-flashlight": "3.1.0",
    "cordova-plugin-network-information": "1.2.1",
    "cordova-plugin-geolocation": "2.1.0",
    "cordova-plugin-vibration": "2.1.1",
    "aerogear-cordova-oauth2": "1.0.5",
    "es6-promise-plugin": "3.0.2",
    "com.hutchind.cordova.plugins.streamingmedia": "0.1.4",
    "me.donaldepignosis.cordova.plugins.streamingmedia.mod": "1.0.5"
}
// BOTTOM OF METADATA
});