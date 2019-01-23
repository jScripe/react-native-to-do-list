
package com.reactlibrary;

import android.content.Intent;
import android.net.Uri;
import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class RNRnMyViewManager extends SimpleViewManager<View> {

  private ThemedReactContext reactContext;
  private View view;

  @Override
  public String getName() {
    return "RNRnMyView";
  }

    @Override
    protected View createViewInstance(ThemedReactContext context) {
        reactContext = context;
        view = new View(context);
        return view;
    }

  @ReactProp(name = "openBrowserWithUrl")
  public void setOnPress(View view, final String prop) {
      view.setOnClickListener(new View.OnClickListener() {
          public void onClick(View v) {
              String url = prop;
              Intent i = new Intent(Intent.ACTION_VIEW);
              i.setData(Uri.parse(url));
              reactContext.startActivity(i);
          }
      });
  }
}