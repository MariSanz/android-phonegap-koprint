package org.sample.hybrid;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;

import com.koprint.tiendas.Tienda;
import com.koprint.tiendas.TiendasActivity;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.ArrayList;

/**
 * Created by hschinsk on 6/18/15.
 */
public class HybridBridge extends CordovaPlugin {
    public ArrayList itemsList = new ArrayList();
    public CallbackContext callbackContext;
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try {
            if (action.equals("obtenerTienda")) {
                Context context = cordova.getActivity().getApplicationContext();
                Intent intent = new Intent(context, TiendasActivity.class);
                cordova.startActivityForResult(this,intent,1);
                this.callbackContext = callbackContext;
                return true;
            }
            callbackContext.error("Invalid action");
            return false;
        } catch(Exception e) {
            System.err.println("Exception: " + e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        }
    }
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (resultCode == Activity.RESULT_OK) {
            String tienda = data.getStringExtra("tienda");
            callbackContext.success(tienda);
        }
    }

}
