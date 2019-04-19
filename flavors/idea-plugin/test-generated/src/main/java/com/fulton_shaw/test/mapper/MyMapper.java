package com.fulton_shaw.test.mapper;


public interface MyMapper {
    void update(Long id, String name);

    void add(Long id, String name);

    void insert();

    void insert(String naem);
}
