package com.example.back.controller;

import com.example.back.model.User;
import com.example.back.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(value = UserController.class)
@WithMockUser
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    User mockUser = new User("test","testing");

    String mockUserJSON="{\"username\":\"test\",\"password\":\"testing\"}";

    @Test
    public void loginUserTest() throws Exception {
        Mockito.when(
                userService.loginUser(Mockito.anyString(),Mockito.anyString())).thenReturn(java.util.Optional.of(mockUser));
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
                "/users/login?username=user&password=pass").accept(
                MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();

        System.out.println(result.getResponse());
        String expected = "{username:test,password:testing}";

        JSONAssert.assertEquals(expected, result.getResponse()
                .getContentAsString(), false);
    }

    @Test
    public void getUserTest() throws Exception {

        Mockito.when(userService.findByUsername(Mockito.anyString()))
                .thenReturn(java.util.Optional.of(mockUser));
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/users/someUsername")
                .contentType(MediaType.APPLICATION_JSON);

        String expected = "{username:test,"+
                "password:testing}";

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        JSONAssert.assertEquals(expected, result.getResponse()
                .getContentAsString(), false);

    }

    @Test
    public void registerUserTest() throws Exception{
        Mockito.when(userService.addNewUser(Mockito.any(User.class))).thenReturn(mockUser);

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/users/add")
                .accept(MediaType.APPLICATION_JSON).content(mockUserJSON)
                .contentType(MediaType.APPLICATION_JSON);

        MvcResult result = mockMvc.perform(requestBuilder).andDo(print()).andReturn();
        MockHttpServletResponse response = result.getResponse();
        assertEquals(HttpStatus.CREATED.value(), response.getStatus());
    }

    @Test
    public void deleteUserTest() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .delete("/users/delete/deleteID")
                .contentType(MediaType.APPLICATION_JSON);


        mockMvc.perform(requestBuilder).andExpect(status().isNoContent());
    }

}
