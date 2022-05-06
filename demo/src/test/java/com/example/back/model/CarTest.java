package com.example.back.model;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
public class CarTest {

    Car mockEmptyCar= new Car();

    @Test
    public void defaultConstructorTest(){
        Car testCar = new Car();
        assertThat(testCar).isNotNull();
        System.out.println(testCar);
    }

    @Test
    public void ConstructorTest(){
        Car testCar =new Car("Tesla","White","Tesla","Van",null,1200,5,"Electric",7);
        assertThat(testCar).isNotNull();
        System.out.println(testCar);
    }

    @Test
    public void gettersSettersTest(){
        mockEmptyCar.setColor("red");
        assertThat(mockEmptyCar.getColor()).isEqualTo("red");

        mockEmptyCar.setOwner("tester");
        assertThat(mockEmptyCar.getOwner()).isEqualTo("tester");

        mockEmptyCar.setModel("testModel");
        assertThat(mockEmptyCar.getModel()).isEqualTo("testModel");

        mockEmptyCar.setBody("testBody");
        assertThat(mockEmptyCar.getBody()).isEqualTo("testBody");

        mockEmptyCar.setBrand("testBrand");
        assertThat(mockEmptyCar.getBrand()).isEqualTo("testBrand");


        mockEmptyCar.setCombustible("testCombustible");
        assertThat(mockEmptyCar.getCombustible()).isEqualTo("testCombustible");

        mockEmptyCar.setPrice(121);
        assertThat(mockEmptyCar.getPrice()).isEqualTo(121);

        mockEmptyCar.setCargoVolume(7);
        assertThat(mockEmptyCar.getCargoVolume()).isEqualTo(7);

        mockEmptyCar.setNumberDoors(20);
        assertThat(mockEmptyCar.getNumberDoors()).isEqualTo(20);

        System.out.println(mockEmptyCar);
    }

}
