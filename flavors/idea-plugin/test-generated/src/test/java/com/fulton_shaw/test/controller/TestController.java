package com.fulton_shaw.test.controller;

import org.junit.Test;

public class TestController {
    @Test
    public void testGetName() {
        Controller controller = new Controller();
        Assert.assertTrue(controller.getName()!=null);
    }
}