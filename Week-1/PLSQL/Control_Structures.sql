CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
INSERT INTO Customers VALUES (1,'Rahul',65,15000,'FALSE');
INSERT INTO Customers VALUES (2,'Priya',45,9000,'FALSE');
INSERT INTO Customers VALUES (3,'Amit',70,20000,'FALSE');
INSERT INTO Customers VALUES (4,'Sneha',30,8000,'FALSE');
INSERT INTO Customers VALUES (5,'Kiran',62,12000,'FALSE');

INSERT INTO Loans VALUES (101,1,9.5,SYSDATE+15);
INSERT INTO Loans VALUES (102,2,10.0,SYSDATE+40);
INSERT INTO Loans VALUES (103,3,8.5,SYSDATE+20);
INSERT INTO Loans VALUES (104,4,11.0,SYSDATE+5);
INSERT INTO Loans VALUES (105,5,9.0,SYSDATE+28);

COMMIT;
SELECT * FROM Customers;
SELECT * FROM Loans;

SET SERVEROUTPUT ON;

BEGIN
    FOR c IN (
        SELECT CustomerID, Name
        FROM Customers
        WHERE Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = c.CustomerID;

        DBMS_OUTPUT.PUT_LINE(
            '1% discount applied to ' || c.Name
        );
    END LOOP;

    COMMIT;
END;
/


-- Scenario 2: Promote customers to VIP

BEGIN
    FOR c IN (
        SELECT CustomerID, Name
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = c.CustomerID;

        DBMS_OUTPUT.PUT_LINE(
            c.Name || ' promoted to VIP.'
        );
    END LOOP;

    COMMIT;
END;
/


-- Scenario 3: Loan Reminder

BEGIN
    FOR l IN (
        SELECT c.Name,
               lo.LoanID,
               lo.DueDate
        FROM Customers c
        JOIN Loans lo
        ON c.CustomerID = lo.CustomerID
        WHERE lo.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID ' || l.LoanID ||
            ' for ' || l.Name ||
            ' is due on ' ||
            TO_CHAR(l.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/