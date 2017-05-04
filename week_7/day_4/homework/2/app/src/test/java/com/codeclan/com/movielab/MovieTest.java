package com.codeclan.com.movielab;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.Before;


/**
 * Created by user on 23/02/2017.
 */


public class MovieTest {

    Movie movie;
    Movie movie2;
    Movie movie3;
    Movie movie4;
    Movie movie5;
    Movie movie6;


    @Before
    public void before() {
        movie = new Movie("Lord Of The Rings", "Adventure", 1);
        movie2 = new Movie("Paul Blart Mall Cop", "Comedy", 2);
        movie3 = new Movie("The Movie", "Horror", 3);
        movie4 = new Movie("Codeclan On Ice", "Horror/Fantasy", 4);
        movie5 = new Movie("Java Palava", "SciFi", 5);
        movie6 = new Movie("The Last Horse", "RomCom",6);





    }

    @Test
    public void testMovieTitle() {
        assertEquals("Lord Of The Rings", movie.getTitle());
    }

    @Test
    public void testSetRank() {
        movie.setRanking(1);
        assertEquals(1, movie.getRanking());
    }

    @Test
    public void testMovieGenre() {
        assertEquals("Adventure", movie.getGenre());
    }

    @Test
    public void testMovieRank() {
        assertEquals(1, movie.getRanking());
    }

    @Test
    public void testMovieToString() {
        assertEquals("Title: Lord Of The Rings Genre: Adventure Rank: 1", movie.toString());
    }



}
