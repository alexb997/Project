package com.example.back.integrations.user;

import com.example.back.controller.UserController;
import org.apache.commons.lang3.StringUtils;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UserControllerIntegrationTest {

    @Autowired
    private MockMvc mvc;

    static String id= StringUtils.EMPTY;

    @Test
    @Order(1)
    public void createUser_thenStatusCreatedTest() throws Exception {
        String exampleUserJSON ="{\"username\":\"test\",\"password\":\"testing\"}";
        MvcResult result = mvc.perform(post("/users/add")
                        .accept(MediaType.APPLICATION_JSON).content(exampleUserJSON)
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
    @Order(2)
    public void loginExistingUserTest() throws Exception {
        mvc.perform(get("/users/login?username=test&password=testing")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    @Order(3)
    public void givenExistingIdUserShouldBeDeleted() throws Exception {
        mvc.perform(delete("/users/delete/"+id)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());
    }
}
