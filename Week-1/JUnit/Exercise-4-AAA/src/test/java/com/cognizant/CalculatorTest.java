package com.cognizant;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private int a;
    private int b;

    @Before
    public void setUp() {
        System.out.println("Setting up...");
        a = 10;
        b = 20;
    }

    @Test
    public void testAddition() {
//AAA:
        // Arrange
        int expected = 30;

        // Act
        int actual = a + b;

        // Assert
        assertEquals(expected, actual);
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
    }
}