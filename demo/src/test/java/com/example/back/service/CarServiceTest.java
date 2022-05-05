package com.example.back.service;

import com.example.back.model.Car;
import com.example.back.repository.CarRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(MockitoJUnitRunner.class)
public class CarServiceTest {

    @Mock
    private CarRepository carRepository;

    @InjectMocks
    private CarService carService;

    @Test
    public void findByIdTest() throws Exception{
        Car mockCar = new Car("Tesla","White","Tesla","Van",null,1200,5,"Electric",7);
        Mockito.when(carRepository.findById(Mockito.anyString())).thenReturn(Optional.of(mockCar));

        Optional<Car> result = carService.findById("SomeID");
        System.out.println(result.toString());
        assertThat(result).isNotEmpty();
    }
}
