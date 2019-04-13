package com.controller;

import javax.annotation.PostConstruct;

import com.model.User;
import com.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/user")
public class UserController{

    @Autowired
    private UserService userService;

    @PostConstruct
    public void init(){

    }

    public Long createUser(User user){
        return userService.createUser(user);
    }

    // want to add here
    // public User getUser(Long id){
    //        return userService.getUser(id);
    // }
    // 
}