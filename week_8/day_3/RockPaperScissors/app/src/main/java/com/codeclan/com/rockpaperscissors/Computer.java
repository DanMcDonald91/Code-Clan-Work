package com.codeclan.com.rockpaperscissors;
import java.util.ArrayList;
import java.util.Random;


/**
 * Created by user on 01/03/2017.
 */

 class Computer implements Chooseable {
    private ArrayList<Weapon> weapons;
     Weapon weapon;

    public Computer() {

        weapons = new ArrayList<Weapon>();
        setUpWeapons();


    public int getLength() {
        return weapons.size();
    }



    public Weapon getWeaponAtIndex(int index) {
        return weapons.get(index);
    }

    public Weapon getWeapon() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);
        Weapon weapon = getWeaponAtIndex(index);
        return weapon;

    }

    public void addWeapon(Weapon w) {
        this.weapon.add(w);
    }
}