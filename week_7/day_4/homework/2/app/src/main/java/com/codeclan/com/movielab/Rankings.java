package com.codeclan.com.movielab;

/**
 * Created by user on 24/02/2017.
 */

public class Rankings {

    Movie[] movies;


    public Ranking() {
        movies = new Movie[6];
    }

    public void addMovie(){

    }

    public int getSize(){

        int count = 0;
        for (Movie movie : movies)
            if (movie != null) {
                count++;
            }
        }
    return count;
    }
}
