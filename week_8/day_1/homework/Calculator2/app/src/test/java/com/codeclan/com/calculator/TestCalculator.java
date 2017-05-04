package com.codeclan.com.calculator;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 01/03/2017.
 */

public class TestCalculator {

    Calculator calc;

    @Before
    public void before() {
        calc = new Calculator();
    }

    @Test
    public void testAdd(){
        assertEquals(4, calc.add(2, 2));
    }

    @Test
    public void testSubtract(){
        assertEquals(4, calc.subtract(6,2));
    }

    @Test
    public void testMultiply() {
        assertEquals(3, calc.divide(7,2));
    }
}
