package com.company;

public class Venue {

    private int RoomNumber;//Changed it from string to int
    private Building Building;

    public Venue(String building, int roomN)
    {
        Building = new Building(building);
        RoomNumber = roomN;

    }
    /*
    public void setRoomNumber(int RoomNum)
    {
        RoomNumber=RoomNum;
    }*/

    public int getRoomNumber()
    {
        return RoomNumber;
    }


    //IS overrided in the Tester Database class
    @Override
    public String toString()
    {
        //String venueLoc = building.getName();

        return Building + "/" + RoomNumber;
    }

}
