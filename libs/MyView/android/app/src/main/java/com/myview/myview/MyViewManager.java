package com.myview.myview;

import android.content.Intent;
import android.net.Uri;
import android.view.View;


import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.uimanager.annotations.ReactProp;


public class MyViewManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "MyView";
    private ThemedReactContext mContext;
    private View view;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public View createViewInstance(ThemedReactContext context){
        mContext = context;
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
                mContext.startActivity(i);
            }
        });
    }
}
