package com.example.back.controller;

import com.example.back.model.Car;
import com.example.back.service.CarService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(value = CarController.class)
@WithMockUser
public class CarControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CarService carService;

    Car mockCar = new Car("Tesla","White","Tesla","Van",null,1200,5,"Electric",7);

    String exampleCarJson ="{\"brand\":\"Tesla\",\"color\":\"White\",\"model\":\"Tesla\",\"body\":\"Van\",\"combustible\":\"Electric\",\"owner\":\"null\",\"price\":\"1200\",\"numberDoors\":\"5\",\"cargoVolume\":\"7\"}";

    @Test
    public void getCarTest() throws Exception {
        Mockito.when(
                carService.findBy(Mockito.anyString())).thenReturn(java.util.Optional.of(mockCar));
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
                "/cars/testID").accept(
                MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();

        System.out.println(result.getResponse());
        String expected = "{brand:Tesla,"+
                "color:White,"+
                "model:Tesla,"+
                "body:Van,"+
                "combustible:Electric,"+
                "owner:null,"+
                "price:1200,"+
                "numberDoors:5,"+
                "cargoVolume:7}";

        JSONAssert.assertEquals(expected, result.getResponse()
                .getContentAsString(), false);
    }

    @Test
    public void createCarTest() throws Exception {
        Mockito.when(carService.addCar(Mockito.any(Car.class))).thenReturn(mockCar);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/cars/add")
                .accept(MediaType.APPLICATION_JSON).content(exampleCarJson)
                .contentType(MediaType.APPLICATION_JSON);

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();
        assertEquals(HttpStatus.CREATED.value(), response.getStatus());
    }

    @Test
    public void deleteCarTest() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .delete("/cars/delete/deleteID")
                .contentType(MediaType.APPLICATION_JSON);

        mockMvc.perform(requestBuilder).andExpect(status().isNoContent());
    }

    @Test
    public void updateCarTest() throws Exception {
        Car mockCarUpdated = new Car("Tesla","White","Tesla","Van","updated123",1200,5,"Electric",7);
        String mockStringCarUpdated ="{\"brand\":\"Tesla\",\"color\":\"White\",\"model\":\"Tesla\",\"body\":\"Van\",\"combustible\":\"Electric\",\"owner\":\"updated123\",\"price\":\"1200\",\"numberDoors\":\"5\",\"cargoVolume\":\"7\"}";

        Mockito.when(carService.editCar(Mockito.anyString(),Mockito.any(Car.class))).thenReturn(Optional.of(mockCarUpdated));
        RequestBuilder requestBuilderPut = MockMvcRequestBuilders
                .put("/cars/edit/someID")
                .accept(MediaType.APPLICATION_JSON).content(mockStringCarUpdated)
                .contentType(MediaType.APPLICATION_JSON);

        MvcResult resultPut = mockMvc.perform(requestBuilderPut).andReturn();
        String expectedUpdate = "{brand:Tesla,"+
                "color:White,"+
                "model:Tesla,"+
                "body:Van,"+
                "combustible:Electric,"+
                "owner:updated123,"+
                "price:1200,"+
                "numberDoors:5,"+
                "cargoVolume:7}";
        JSONAssert.assertEquals(expectedUpdate, resultPut.getResponse()
                .getContentAsString(),false);
    }

    @Test
    public void filterCars() throws Exception {
        Car mockCar2 = new Car("Tesla","White","Tesla","Van","updated123",1200,5,"Electric",7);
        Car mockCar3 = new Car("Toyota","Black","Tesla","Van","tester122",1200,5,"Electric",7);
        List<Car> mockCarList= new ArrayList<>();
        mockCarList.add(mockCar);
        mockCarList.add(mockCar2);
        mockCarList.add(mockCar3);
        Page<Car> mockPageCars= new PageImpl<>(mockCarList);

        Mockito.when(carService.findByFilters(Mockito.anyMap(),Mockito.any(Pageable.class))).thenReturn(mockPageCars);
        RequestBuilder requestBuilderGet = MockMvcRequestBuilders.get(
                "/cars/filter").accept(
                MediaType.APPLICATION_JSON);

        mockMvc.perform(requestBuilderGet).andDo(print()).andExpect(status().isOk())
                .andExpect(jsonPath("$.items",hasSize(3)));
    }
}
