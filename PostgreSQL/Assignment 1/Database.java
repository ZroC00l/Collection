import EDU.purdue.cs.bloat.tree.LEGatherer;
import com.company.Building;
import com.company.LectureHall;
import com.company.Office;
import com.company.Venue;
import com.db4o.Db4o;
import com.db4o.Db4oEmbedded;
import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;
import com.db4o.query.Predicate;
import com.db4o.query.Query;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;
import java.util.ArrayList;
//package com.company;

public class Database
{


    //private String BuildingName, OfficeName, lhn, rn, Name, Surname, PhoneNumber;
    //private int LectureHallNumber, NumberOfSeats,OfficeNumber;
    //int temp;


    public void open()
	{
		//TODO
        database = Db4oEmbedded.openFile(Db4oEmbedded.newConfiguration(),fileName);
	}
	public void close()
	{
		//TODO
        database.close();
	}
    public void addBuilding(BufferedReader reader) throws IOException
    {
        //TODO
        System.out.println("Enter the Building Name: ");
        String myBD = reader.readLine();
        //reader= new BufferedReader(new InputStreamReader(System.in));

        //BuildingName = reader.readLine();
        //Building B = new Building(BuildingName);
        Building arch = new Building(myBD);
        database.store(arch);
        System.out.println("Stored Building name into database successfully");
    }
    public void addLectureHall(BufferedReader reader) throws IOException
    {
        //TODO
        System.out.println("Enter the Lecture Hall name: ");
        String lectureBD = reader.readLine();
        //reader = new BufferedReader(new InputStreamReader(System.in));
        //lhn = reader.readLine();


        System.out.println("Enter the room number: ");
        String lectureRN = reader.readLine();
        //reader = new BufferedReader(new InputStreamReader(System.in));
        //rn = reader.readLine();
        //NumberOfSeats = Integer.parseInt(rn);

        System.out.println("Enter the Lecture hall number of Seats: ");
        String lectureHallSeats = reader.readLine();
        //LectureHall L = new LectureHall(lhn, NumberOfSeats);


        LectureHall myObj= new LectureHall(lectureBD, Integer.parseInt(lectureHallSeats), Integer.parseInt(lectureRN));
        database.store(myObj);
        System.out.println("Lecture hall details successfully stored ");

    }
    public void addOffice(BufferedReader reader) throws IOException
    {
        //TODO
        System.out.println("Enter the Building Name: ");
        String BD = reader.readLine();
       // reader = new BufferedReader(new InputStreamReader(System.in));
        //OfficeName = reader.readLine();


        System.out.println("Enter the office number: ");
        String rNum = reader.readLine();
        //reader = new BufferedReader(new InputStreamReader(System.in));
        //Name = reader.readLine();

        System.out.println("Enter the office user's name: ");
        String officeOwnerName = reader.readLine();
        //reader = new BufferedReader(new InputStreamReader(System.in));
        //Surname = reader.readLine();


        System.out.println("Enter the office user's surname: ");
        String officeOwnerSurname = reader.readLine();
        //reader = new BufferedReader(new InputStreamReader(System.in));
        //PhoneNumber = reader.readLine();

        System.out.println("Enter office user's phone number: ");
        String officeOwnerPhoneNum = reader.readLine();

        Office O = new Office(BD, Integer.parseInt(rNum), officeOwnerName, officeOwnerSurname,officeOwnerPhoneNum);
        database.store(O);
        System.out.println("Stored office details successfully");

    }
    public void listVenues()
    {
        //TODO

        Venue prototype = new Venue(null,0);
        ObjectSet<Venue> result = database.queryByExample(prototype);
        output(result);
    }

    /*private void listResult(ObjectSet<Venue> result) {


    }*/

    public void output(List<Venue> set)
    {
	//TODO
        System.out.println(set.size());
        for (int x=0 ; x < set.size() ; x++)
        {
            System.out.println(set.get(x));
        }


    }
    public void findOffice(BufferedReader reader) throws IOException
    {
        //TODO

        System.out.println("Enter the office name: ");
        String officeName = reader.readLine();
        // reader = new BufferedReader(new InputStreamReader(System.in));
       // OfficeName = reader.readLine();

        //Office obj = new Office(null,OfficeName,null,null);
        //ObjectSet result = database.queryByExample(obj);
        //listResult(result);

        Office myObj = new Office(null, 0, officeName, null, null);
        ObjectSet<Office> result = database.queryByExample(myObj);

        for(int x = 0 ;x < result.size() ; x++)
        {
            System.out.println(result.get(x));
            System.out.println("Office successfully found");
        }

    }
    public void findLectureHall(BufferedReader reader) throws IOException
    {
        //TODO
        System.out.println("Enter the Lecture Hall name: ");
        String lectureHallName = reader.readLine();


        LectureHall myObj = new LectureHall(lectureHallName, 0, 0);
        ObjectSet<LectureHall> result = database.queryByExample(myObj);


        for(int x=0 ;x< result.size() ; x++)
        {
            System.out.println(result.get(x));
            System.out.println("Lecture room successfully found!");
        }
        //reader = new BufferedReader(new InputStreamReader(System.in));
        //lhn = reader.readLine();

        // Find Lecture Hall can be queried by example or by SODA
        //LectureHall obj = new LectureHall(lhn,NumberOfSeats);
        //ObjectSet result = database.queryByExample(obj);
        //listResult(result);




    }
    public void updateVenue(BufferedReader reader) throws IOException
    {
        //TODO
       System.out.println("Enter the venue to be updated: ");
       String venue = reader.readLine();

       System.out.println("Enter the room number: ");
       String roomNum = reader.readLine();

       Office myObj = new Office(venue, Integer.parseInt(roomNum), null, null , null);
       ObjectSet<Office> result = database.queryByExample(myObj);


       if(result.size() != 0)
       {
           System.out.println("Enter the new office owner name: ");
           String newName = reader.readLine();

           System.out.println("The new new office owner surname: ");
           String newSurname = reader.readLine();

           System.out.println("Enter the new phone number: ");
           String newPhoneNum = reader.readLine();

           Office found = (Office) result.next();
           found.setName(newName);
           found.setSurname(newSurname);
           found.setPhoneNumber(newPhoneNum);
           database.store(found);
           System.out.println("Office updated to new owner: " + found);

       }
       else
       {

           LectureHall lectObj = new LectureHall(venue, 0, Integer.parseInt(roomNum));
           ObjectSet<LectureHall> newResult = database.queryByExample(lectObj);

           if(newResult.size() != 0)
           {
               System.out.println("Enter the new seat number: ");
               String updatedSeatsNum = reader.readLine();

               LectureHall found = (LectureHall) newResult.next();
               found.setNumberOfSeats(Integer.parseInt(updatedSeatsNum));
               database.store(found);
               System.out.println("Lecture hall number of seats updated successfully");



           }
           else
           {
               System.out.println("The Venue you are looking for does not exist");
           }


       }

    }
	private ObjectContainer database;
	private final String fileName = "database.db";
}