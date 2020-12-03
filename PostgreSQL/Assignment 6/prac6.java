
import com.mongodb.MongoClient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.UnknownHostException;
import java.util.Set;

import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.client.*;
public class prac6 {

	public static void main(String [] args)
	{
		MongoClient mongoClient;
		try 
		{
			mongoClient = new MongoClient();
			DB db = mongoClient.getDB("prac6db");
			BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
			try
			{
				int n = 0;
				while(n != 99)
				{
					System.out.print("Enter an option/99 to quit: ");
					 try {
						n = Integer.parseInt(reader.readLine());
					} catch (NumberFormatException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					 if(n == 1)
						 printCollection(db);
					 else if(n ==2)
					 {
						 printFBdocs(db);
					 }
					 else if(n == 3)
						 countMessages(db);
					 else if(n==4)
						 createCollection(db);
					 else if(n==5)
					 {
						 System.out.print("Enter name to search: ");
						 String name;
						try {
							name = reader.readLine();
							getMessageCount(name,db);
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						 
					 }
					 
				}
			}
			finally
			{
				try {
					reader.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			System.out.println("Goodbye!!");
		}
		catch (UnknownHostException e) 
		{
			System.out.println("Could not create mongoclient object");	
		}
		
	}
	
	private static void getMessageCount(String name, DB db) 
	{
		DBCursor iterable = db.getCollection("message").find();
		int count = 0;
		while(iterable.hasNext())
		{
			if((((BasicDBObject) iterable.next().get("from")).get("name")).equals(name))
			{
				count++;
			}
		}
		System.out.println(name + " has sent " + count + " messages");
	}

	private static void countMessages(DB db) 
	{
		
		DBCursor iterable = db.getCollection("facebook").find();
		BasicDBList doc =  (BasicDBList) iterable.next().get("data");
		System.out.println("No. of messages = " + doc.size());
		
	}

	private static void createCollection(DB db) 
	{
		DBCollection coll;
		coll = db.getCollection("message");
		if(coll != null)
		{
			coll.drop();
		}
			BasicDBObject mes = new BasicDBObject();
			db.createCollection("message", null);
			coll = db.getCollection("facebook");
			DBCursor iterable = coll.find();
			while(iterable.hasNext())
			{
				BasicDBList data = (BasicDBList) iterable.next().get("data");
				if(data != null)
				{
		            for(Object s : data)
		            {
		            	BasicDBObject usethis = (BasicDBObject) s;
		            	BasicDBObject doc = new BasicDBObject();
		            	doc.put("message",(usethis.get("message")));
		            	BasicDBObject sender = new BasicDBObject();
		            	sender.put("name", (((BasicDBObject) usethis.get("from")).get("name")));
		            	sender.put("id", (((BasicDBObject) usethis.get("from")).get("id")));
		            	doc.put("from",sender);
		            	DBCollection newCol = db.getCollection("message");
		            	newCol.insert(doc);	
		            }
				}
			}
		
		
	}

	private static void printFBdocs(DB db) 
	{
		DBCursor iterable = db.getCollection("facebook").find();
		System.out.println("Facebook Documents: ");
		while(iterable.hasNext())
		{
			System.out.println(iterable.next());
		}
		
	}

	public static void printCollection(DB db)
	{
		Set<String> colls = db.getCollectionNames();
		System.out.println("The collections are: ");
		for (String s : colls) 
		{
			System.out.println(s);
		}
	}
}
