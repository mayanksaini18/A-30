import java.lang.reflect.InaccessibleObjectException;
import java.util.Scanner;

public class Launch {

    public static void main(String[] args) {
        Bank b = new Bank();
        b.initiate();
    }
}

class Bank {

    public void initiate() {
        ATM a = new ATM();
        int attempts = 0 ;
        final int MAX_ATTEMPTS = 3;

        while (attempts < MAX_ATTEMPTS) {
            
            try{
                
                a.authenticate();   // call to take input
                a.verify();     // call for verification
                System.out.println("LOGin succefull");
            }catch (InvalidCredentialsException e){
                attempts++;
                 System.out.println("Attempt " + attempts + " of " + MAX_ATTEMPTS);
                 if (attempts == MAX_ATTEMPTS) {
                    System.out.println("Max attempts reached. Account Locked!");
                }

            }

            
        }
    }
}

class ATM {

    private int acc = 1234;   // correct syntax for variables
    private int pwd = 9946;   // added 'int'

    int ac;    // user entered acc number
    int pass;  // user entered password

     Scanner sc = new Scanner(System.in);

    public void authenticate(){

                System.out.print("Enter account number: ");
                ac = sc.nextInt() ;

                System.out.print("Enter PIN: ");
                 pass = sc.nextInt();

    }

    public void verify() throws InvalidCredentialsException {
        // verification logic
        if (ac == acc && pass == pwd) {
            System.out.println("Login successful!");
            return;
        } else {
            System.out.println("Invalid details!");
            throw new InvalidCredentialsException (" invalid acc numbert otr PIN");
        }
    }
}

class InvalidCredentialsException extends Exception{
     public InvalidCredentialsException(String msg) {
        super(msg);
    }
}
