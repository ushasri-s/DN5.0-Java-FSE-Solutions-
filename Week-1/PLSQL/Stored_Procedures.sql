-- Accounts Table
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER(10,2)
);

-- Employees Table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER(10,2)
);

-- Sample Accounts
INSERT INTO Accounts VALUES (101,1,'Savings',10000);
INSERT INTO Accounts VALUES (102,2,'Savings',15000);
INSERT INTO Accounts VALUES (103,3,'Current',20000);
INSERT INTO Accounts VALUES (104,4,'Savings',5000);
INSERT INTO Accounts VALUES (105,5,'Current',12000);

-- Sample Employees
INSERT INTO Employees VALUES (1,'Ramesh','HR',40000);
INSERT INTO Employees VALUES (2,'Sita','HR',45000);
INSERT INTO Employees VALUES (3,'Amit','IT',60000);
INSERT INTO Employees VALUES (4,'Sneha','IT',55000);
INSERT INTO Employees VALUES (5,'Kiran','Finance',50000);

COMMIT;


CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType='Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed successfully.');
END;
/


-- Scenario 2
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_dept IN VARCHAR2,
    p_bonus IN NUMBER
)
IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus / 100)
    WHERE Department = p_dept;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus updated successfully.');
END;
/


-- Scenario 3
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_fromAccount IN NUMBER,
    p_toAccount IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN
    -- Get balance of source account
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_fromAccount;

    -- Check sufficient balance
    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_fromAccount;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_toAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance.');

    END IF;
END;
/