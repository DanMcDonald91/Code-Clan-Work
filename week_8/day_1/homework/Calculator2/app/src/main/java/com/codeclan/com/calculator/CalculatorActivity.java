package com.codeclan.com.calculator;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class CalculatorActivity extends AppCompatActivity {

    EditText number1Text;
    EditText number2Text;
    Button addbtn;
    Button subBtn;
    Button multBtn;
    Button dvdBtn;
    Calculator calc;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calculator);
        number1Text = (EditText) findViewById(R.id.number1EditText);
        number2Text = (EditText) findViewById(R.id.number2EditText);
        addbtn = (Button) findViewById(R.id.addBtn);
        subBtn = (Button) findViewById(R.id.subtractBtn);
        multBtn = (Button) findViewById(R.id.multiplyBtn);
        dvdBtn = (Button) findViewById(R.id.divideBtn);
        calc = new Calculator();
    }

    public void onCalcButtonClick(View view){
        int num1 = Integer.parseInt(number1Text.getText().toString());
        int num2 = Integer.parseInt(number2Text.getText().toString());
        int result = 0;

        switch (view.getId()) {
            case R.id.addBtn:
                result = calc.add(num1, num2);
                break;
            case R.id.subtractBtn:
                result = calc.subtract(num1, num2);
                break;
            case R.id.multiplyBtn:
                result = calc.multiply(num1, num2);
                break;
            case R.id.divideBtn:
                result = calc.divide(num1, num2);
                break;
        }

        Intent intent = new Intent(CalculatorActivity.this, ResultActivity.class);
        intent.putExtra("answer", result);
        startActivity(intent);

    }

}
