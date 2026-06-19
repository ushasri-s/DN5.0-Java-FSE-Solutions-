//IMPLEMENTING FCTORY METHOD PATTERN

//product
abstract class Document {
    public abstract void printDocument();
}
//concrete product
class WordDocument extends Document {
    public void printDocument() {
        System.out.println("This is a Word Document");
    }
}

class PdfDocument extends Document {
    public void printDocument() {
        System.out.println("This is a PDF");
    }
}

class ExcelDocument extends Document {
    public void printDocument() {
        System.out.println("This is an Excel Document");
    }
}
//factory
abstract class DocumentFactory {
    public abstract Document createDocument();
}

//concrete factory
class WordDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}

//test class
public class FactoryMethodPatternExample {
    public static void main(String[] args) {

        DocumentFactory factory;

        factory = new WordDocumentFactory();
        Document d1 = factory.createDocument();
        d1.printDocument();

        factory = new PdfDocumentFactory();
        Document d2 = factory.createDocument();
        d2.printDocument();

        factory = new ExcelDocumentFactory();
        Document d3 = factory.createDocument();
        d3.printDocument();
    }
}