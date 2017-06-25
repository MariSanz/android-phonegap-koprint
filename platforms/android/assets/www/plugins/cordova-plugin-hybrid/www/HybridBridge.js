cordova.define("cordova-plugin-hybrid.HybridBridge", function(require, exports, module) {
var exec = require('cordova/exec'),
    cordova = require('cordova');

function HybridBridge() {

}
HybridBridge.prototype.obtenerTienda = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HybridBridge", "obtenerTienda", []);
};

module.exports = new HybridBridge();



});
