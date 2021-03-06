package com.codeclan.com.cardgame;

import java.util.ArrayList;

/**
 * Created by user on 02/03/2017.
 */

public class Runner {
    public static void main(String[] args) {
        ArrayList<Player> players = new ArrayList<Player>();
        Deck deck = new Deck();
        Dealer dealer = new Dealer(deck);
        Player player1 = new Player("Ally");
        Player player2 = new Player("Alan");
        Game game = new Game(players, dealer);
    }

    game.play();
    String result = game.compareCards();
    System.out.println(result);
}
