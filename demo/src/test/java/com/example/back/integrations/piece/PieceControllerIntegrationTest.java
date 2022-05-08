package com.example.back.integrations.piece;

import com.example.back.controller.PiecesController;
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

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class PieceControllerIntegrationTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private PiecesController piecesController;

    static String id= StringUtils.EMPTY;

    @Test
    @Order(1)
    public void getPiecesTest() throws Exception {
        mvc.perform(get("/pieces/all").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content()
                        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());
    }

    @Test
    @Order(2)
    public void createPiece_thenStatusCreatedTest() throws Exception {
        String examplePieceJson ="{\"name\":\"Anvelope-iarna\",\"model\":\"Mercedes-benz\",\"utility\":\"Piese-auto\",\"type\":\"Anvelope\",\"owner\":\"Tester121\",\"price\":\"121\"}";

        MvcResult result = mvc.perform(post("/pieces/add")
                        .accept(MediaType.APPLICATION_JSON).content(examplePieceJson)
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
    public void givenExistentId_successGet() throws Exception {
        mvc.perform(get("/pieces/"+id).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.id",is(id)));
    }

    @Test
    @Order(4)
    public void updatePiece_thenStatusOk() throws Exception {
        String exampleUpdatePieceJson ="{\"name\":\"Anvelope-vara\",\"model\":\"Volvo\",\"utility\":\"Piese-auto\",\"type\":\"Anvelope\",\"owner\":\"Tester121\",\"price\":\"121\"}";
        mvc.perform(put("/pieces/edit/"+id)
                        .accept(MediaType.APPLICATION_JSON).content(exampleUpdatePieceJson)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content()
                        .contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());
    }

    @Test
    @Order(5)
    public void givenExistingId_DeletePiece() throws Exception {
        mvc.perform(delete("/pieces/delete/"+id)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());
    }

    @Test
    @Order(6)
    public void givenUnexistentID_FailGet() throws Exception {
        mvc.perform(get("/pieces/"+id).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andDo(print());
    }
}
