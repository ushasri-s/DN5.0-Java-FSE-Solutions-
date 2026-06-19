//IMPLEMENTING SINGLETON PATTERN
class Logger {
    private static Logger instance = new Logger();
    private Logger(){
        System.out.println("Singleton Pattern");
    }
    public static Logger getInstance(){
        return instance;
    }
    public void log(String msg){
        System.out.println(msg);
    }
}
//test clss to check if only single instance exists.
public class SingletonPatternExample{
    public static void main(String[] args){
        Logger obj1 = Logger.getInstance();
        Logger obj2 = Logger.getInstance();

        obj1.log("Message 1");
        obj2.log("Message 2");

        if(obj1 == obj2){
            System.out.println("Singleton Pattern exists");
        }else{
            System.out.println("Not a Singleton Pattern");
        }

    }
}
