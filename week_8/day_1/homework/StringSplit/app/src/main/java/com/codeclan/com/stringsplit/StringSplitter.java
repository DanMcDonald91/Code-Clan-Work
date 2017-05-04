package com.codeclan.com.stringsplit;

/**
 * Created by user on 27/02/2017.
 */

public class StringSplitter {

    private String input;

    public StringSplitter(String input) {

        this.input = input;
    }

    public void splitString() {
        String[] words = input.split(" ");
        for (String s : words) {
            System.out.println(s);
        }


}
}




