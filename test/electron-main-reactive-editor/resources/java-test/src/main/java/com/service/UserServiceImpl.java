package com.service;

import com.model.User;
import com.mapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Long createUser(User user) {
        userMapper.createUser(user);
        return user.getId();
    }

    // want to add a getPerson here
}