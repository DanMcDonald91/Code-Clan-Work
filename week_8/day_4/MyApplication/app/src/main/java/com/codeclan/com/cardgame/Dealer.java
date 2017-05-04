package com.codeclan.com.cardgame;



/**
 * Created by user on 02/03/2017.
 */

public class Dealer {

    private Deck deck;

    public Dealer(Deck deck) {
        this.deck = deck;
        deck.shuffle();

    }

    public Card deal() {
        Card card = deck.removeCard();
        return card;
    }

}
