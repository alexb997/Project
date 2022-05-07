package com.example.back.integrations.car;

import com.example.back.controller.CarController;
import com.example.back.model.Car;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@SpringBootTest
public class CarIntegrationControllerTest {
    @Autowired
    private MockMvc mvc;

    @Autowired
    private CarController carController;

    @Test
    public void givenCars_whenGetCars_thenStatus200() throws Exception {

        mvc.perform(get("/cars/filter").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content()
                        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());
//                .andExpect(jsonPath("$.items",hasSize(2)));
    }

    @Test
    public void createCar_thenStatusCreated() throws Exception {

        Car mockCar = new Car("Tesla","White","Tesla","Van",null,1200,5,"Electric",7);

        String exampleCarJson ="{\"brand\":\"Tesla\",\"color\":\"White\",\"model\":\"Tesla\",\"body\":\"Van\",\"combustible\":\"Electric\",\"owner\":\"null\",\"price\":\"1200\",\"numberDoors\":\"5\",\"cargoVolume\":\"7\"}";

        mvc.perform(post("/cars/add")
                .accept(MediaType.APPLICATION_JSON).content(exampleCarJson)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(content()
                        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());
//                .andExpect(jsonPath("$.items",hasSize(2)));
    }
}
