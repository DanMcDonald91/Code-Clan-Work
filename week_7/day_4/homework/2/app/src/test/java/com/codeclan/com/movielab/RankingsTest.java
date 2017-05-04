package com.codeclan.com.movielab;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 24/02/2017.
 */

public class RankingsTest {

    private Rankings rank;
    private Movie movie1;


    @Before
    public void before;(){

        rank = new Rankings();
        movie1 - new Movie("Heat", "Thriller", 1);
    }

    @Test
    public void testAddMovie(Movie movie){
        int index = movie.getRanking() - 1;
        movie[0] =movie;
        assertEquals(1, rank.getSize());
    }
}
