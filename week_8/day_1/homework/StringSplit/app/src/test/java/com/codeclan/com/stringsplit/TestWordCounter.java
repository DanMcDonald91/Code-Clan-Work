package com.codeclan.com.stringsplit;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 28/02/2017.
 */

public class TestWordCounter {

    WordCounter counter;

    @Before

    public void before() {
        counter = new WordCounter("It was the best of times it was the worst of times");
    }

    @Test
    public void testWordCount(){
        assertEquals(12, counter.getCount());
    }
}
