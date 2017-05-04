package com.codeclan.com.cardgame;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 02/03/2017.
 */

public class TestCard {

    Card card;

    @Before
    public void before(){
        card = new Card(Suit.CLUBS, Rank.FIVE);

    }

    @Test
    public void testCardValue()
    {
        assertEquals(5, card.getValue());
    }

}
