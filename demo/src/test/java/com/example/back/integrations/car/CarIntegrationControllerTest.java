package com.example.back.integrations.car;

import com.example.back.controller.CarController;
import org.apache.commons.lang3.StringUtils;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CarIntegrationControllerTest {
    @Autowired
    private MockMvc mvc;

    @Autowired
    private CarController carController;

    static String id= StringUtils.EMPTY;

    @Test
    @Order(1)
    public void givenCars_whenGetCars_thenStatus200() throws Exception {

        mvc.perform(get("/cars/filter").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content()
                        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());
    }

    @Test
    @Order(2)
    public void createCar_thenStatusCreated() throws Exception {
        String exampleCarJson ="{\"brand\":\"Tesla\",\"color\":\"White\",\"model\":\"Tesla\",\"body\":\"Van\",\"combustible\":\"Electric\",\"owner\":\"null\",\"price\":\"1200\",\"numberDoors\":\"5\",\"cargoVolume\":\"7\"}";

        MvcResult result = mvc.perform(post("/cars/add")
                .accept(MediaType.APPLICATION_JSON).content(exampleCarJson)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(content()
                        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andReturn();

        String content = result.getResponse().getContentAsString();
        id=content.substring(7,31);
    }

    @Test
    @Order(3)
    public void giveID_getSpecificCar_success() throws Exception {
        mvc.perform(get("/cars/"+id).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.id",is(id)));
    }

    @Test
    @Order(4)
    public void giveID_updateCar() throws Exception {
        String exampleUpdateCarJson ="{\"brand\":\"Toyota\",\"color\":\"White\",\"model\":\"Tesla\",\"body\":\"Sport\",\"combustible\":\"Electric\",\"owner\":\"null\",\"price\":\"1200\",\"numberDoors\":\"5\",\"cargoVolume\":\"7\"}";
        mvc.perform(put("/cars/edit/"+id)
                        .accept(MediaType.APPLICATION_JSON).content(exampleUpdateCarJson)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content()
                        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());

    }

    @Test
    @Order(5)
    public void giveID_deleteCar() throws Exception {
        mvc.perform(delete("/cars/delete/"+id)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());

    }

    @Test
    @Order(6)
    public void giveID_getSpecificCar_failure() throws Exception {
        mvc.perform(get("/cars/"+id).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andDo(print());
    }
}
