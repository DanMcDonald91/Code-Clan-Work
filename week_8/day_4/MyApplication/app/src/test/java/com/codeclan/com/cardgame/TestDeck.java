package com.codeclan.com.cardgame;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;

/**
 * Created by user on 02/03/2017.
 */

public class TestDeck {
    Deck deck;

    @Before

    public void before() {
        deck = new Deck();
    }

    @Test
    public void TestDeckHas52Cards() {
        assertEquals(52, deck.getNumberOfCards());

    }

    @Test
    public void TestRemoveCard() {
        Card card = deck.removeCard();
        assertNotNull(card);
        assertEquals(51, deck.getNumberOfCards());

    }


}
