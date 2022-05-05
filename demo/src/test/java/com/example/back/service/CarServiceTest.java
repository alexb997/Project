package com.example.back.service;

import com.example.back.model.Car;
import com.example.back.repository.CarRepository;
import com.jayway.jsonpath.JsonPath;
import org.assertj.core.api.Condition;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@RunWith(SpringRunner.class)
public class CarServiceTest {

    @Mock
    private CarRepository carRepository;

    @InjectMocks
    private CarService carService;

    private Car mockCar = new Car("Tesla","White","Tesla","Van",null,1200,5,"Electric",7);

    @Test
    public void findByIdTest() throws Exception{
        Mockito.when(carRepository.findById(Mockito.anyString())).thenReturn(Optional.of(mockCar));

        Optional<Car> result = carService.findById("SomeID");
        System.out.println(result.toString());
        assertThat(result).isNotEmpty();
    }

    @Test
    public void addCarTest() throws Exception{
        Mockito.when(carRepository.save(Mockito.any(Car.class))).thenReturn(mockCar);

        Car result = carService.addCar(new Car());
        String expected ="Car{brand='Tesla', color='White', model='Tesla', body='Van', combustible='Electric', owner='null', price=1200, numberDoors=5, cargoVolume=7}";

        assertThat(result.toString()).isEqualTo(expected);
        System.out.println(result);
    }

    @Test
    public void editCarTest() throws Exception{
        Mockito.when(carRepository.save(Mockito.any(Car.class))).thenReturn(mockCar);
        mockCar.setColor("Black");
        Car result = carService.addCar(new Car());
        String expected ="Car{brand='Tesla', color='Black', model='Tesla', body='Van', combustible='Electric', owner='null', price=1200, numberDoors=5, cargoVolume=7}";

        assertThat(result.toString()).isEqualTo(expected);
        System.out.println(result);
        mockCar.setColor("White");
    }

    @Test
    public void allCarsTest() throws Exception{
        List<Car> mockCarList= new ArrayList<>();
        Car mockCar2 = new Car("Tesla","Black","Tesla","Van",null,1200,5,"Electric",7);
        Car mockCar3 = new Car("Dacia","Silver","Tesla","Van",null,1200,5,"Electric",7);
        Car mockCar4 = new Car("Jaguar","Red","Tesla","Van",null,1200,5,"Electric",7);

        mockCarList.add(mockCar);
        mockCarList.add(mockCar2);
        mockCarList.add(mockCar3);
        mockCarList.add(mockCar4);
        Page<Car> mockPageCars= new PageImpl<>(mockCarList);
        Mockito.when(carRepository.findAll(Mockito.any(Pageable.class))).thenReturn(mockPageCars);
        Page<Car> result = carService.allCars(PageRequest.of(0,3));

        assertThat(result.getTotalElements()).isEqualTo(mockPageCars.getTotalElements());
        System.out.println(result.getTotalElements());
    }
}
