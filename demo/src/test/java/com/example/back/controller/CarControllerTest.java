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
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@WebMvcTest(value = CarController.class)
@WithMockUser
public class CarControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CarService carService;

    Car mockCar = new Car("Tesla","White","Tesla","Van",null,1200,5,"Electric",7);

    String exampleCarJson = "{\n" +
            "\"brand:Tesla\",\n" +
            "\"color:White\",\n" +
            "\"model:Tesla\",\n" +
            "\"body:Van\",\n" +
            "\"combustible:Electric\",\n" +
            "\"owner:null,\n" +
            "\"price:1200,\n" +
            "\"numberDoors:5,\n" +
            "\"cargoVolume:7\n" +
            "}";

    @Test
    public void getCar() throws Exception {
        Mockito.when(
                carService.findById(Mockito.anyString())).thenReturn(java.util.Optional.of(mockCar));
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
}
