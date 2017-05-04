package com.codeclan.com.calculator;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class ResultActivity extends AppCompatActivity {

    TextView resultText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        resultText = (TextView)findViewById(R.id.resultText);

        Intent intent = getIntent();
        Bundle extras = intent.getExtras();

        int answer = extras.getInt("answer");
        resultText.setText(Integer.toString(answer));
    }
}
