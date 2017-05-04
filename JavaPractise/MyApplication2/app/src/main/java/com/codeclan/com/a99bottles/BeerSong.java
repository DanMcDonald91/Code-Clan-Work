package com.codeclan.com.a99bottles;

/**
 * Created by user on 03/03/2017.
 */

// Practise using while and if loops.
    //99 Bottles of beer.

public class BeerSong {
    public static void main(String[] args) {


        int beerNum = 99;
        String word = "Bottles";
        // Declaring an int called beerNum and giving it the value of 99
        // Declaring a character string named word, and giving it to the string name bottles

        while (beerNum > 0) {
            // As long as there are more than 0 beers, everything inside of the if loop will be executed.

            if (beerNum == 1) {
                word = "bottle";
            }

            System.out.println(beerNum + " " + word + " of beer on the wall, ");
            System.out.println(beerNum + " " + word + " of beer, ");
            System.out.println("Take one down");
            System.out.println("Pass it around");
            beerNum = beerNum - 1;


            if (beerNum > 0) {
                System.out.println(beerNum + " " + word + " of beer on the wall. ");
            } else {
                System.out.println("No more bottle's of beer on the wall");
            }
        }
    }
}
