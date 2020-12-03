package com.company;

public class LectureHall extends Venue {

    private int NumberOfSeats;

    public LectureHall(String building, int n, int roomN)
    {
        super(building,roomN);
        setNumberOfSeats(n);
    }

    public void setNumberOfSeats(int NumberOfSeats)
    {
        this.NumberOfSeats=NumberOfSeats;
    }

    public int getNumberOfSeats()
    {

        return NumberOfSeats;
    }

    public void addSeats(int seats)
    {
        NumberOfSeats = seats;
    }


    public String toString()
    {
        return super.toString() + "/" + NumberOfSeats;
    }


}
