package com.codeclan.com.rockpaperscissors;

import org.junit.Before;

import java.util.ArrayList;

/**
 * Created by user on 01/03/2017.
 */

public class ComputerTest {
    private ArrayList<Weapon> weapons;
    private Weapon weapon;

    @Before
    public void before() {
        weapons = new ArrayList<Weapon>();
        weapons.add("Rock");

    }
}
