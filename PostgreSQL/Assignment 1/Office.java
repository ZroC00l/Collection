package com.company;

public class Office extends Venue{

    private String Name,Surname,phoneNumber;

    public Office(String building,int roomnumber,String name,String surname, String phoneNum)
    {
        super(building,roomnumber);
        setName(name);
        setSurname(surname);
        setPhoneNumber(phoneNum);

    }
/*
    public void setChanges(String Name, String Surname)
    {
        this.Name=Name;
        this.Surname= Surname;
    }
*/

    public void setName(String Name)
    {
        this.Name=Name;
    }

    public void setSurname(String Surname)
    {
        this.Surname=Surname;
    }
    public void setPhoneNumber(String phoneNumber)
    {
        this.phoneNumber=phoneNumber;
    }

    public String getName()
    {
        return Name;
    }

    public String getSurname()
    {
        return Surname;
    }

    public String getPhoneNumber()
    {
        return phoneNumber;
    }
/*
    public String getChanges(String Name, String Surname)
    {
        return getName() + " " + getSurname();
    }*/


    public String toString()
    {
        return super.toString() + "/" + Name + "/" + Surname + "/" + phoneNumber;
    }


}
