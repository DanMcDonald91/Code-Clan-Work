package com.codeclan.com.movielab;

/**
 * Created by user on 23/02/2017.
 */

public class Movie {
    private String title;
    private String genre;
    private int ranking;

    public Movie(String title, String genre, int ranking ){
        this.setTitle(title);
        this.setGenre(genre);
        this.setRanking(ranking);


    }

    public String getTitle() {
        return this.title;
    }

    public String getGenre() {
        return this.genre;
    }



    public int getRanking() {
        return this.ranking;
    }




    public void setTitle(String title) {
        this.title = title;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }

    @Override
    public String toString() {
        return "Title:" +this.title + " Genre:" + this.genre + " Rank:" + this.ranking;
    }
}
