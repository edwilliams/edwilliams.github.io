import java.io.*;

public class ToDo {

    public static void main(String[] args) {

        try {
            String str = args[0];
            File newTextFile = new File("./data.json");

            FileWriter fw = new FileWriter(newTextFile);
            fw.write(str);
            fw.close();

            System.out.println( "first arg is " + args[0] );

        } catch (IOException iox) {
            //do stuff with exception
            iox.printStackTrace();
        }
    }
}
