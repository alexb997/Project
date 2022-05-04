package com.example.back.controller;

import com.example.back.model.Pieces;
import com.example.back.service.PiecesService;
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

import java.util.Optional;

@RunWith(SpringRunner.class)
@WebMvcTest(value = PiecesController.class)
@WithMockUser
public class PiecesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PiecesService piecesService;

    Pieces mockPiece = new Pieces("Anvelope-iarna","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);

    String mockPieceJSON ="{\"name\":\"Anvelope iarna\",\"model\":\"Mercedes-benz\",\"utility\":\"Piese auto\",\"type\":\"Anvelope\",\"owner\":\"Tester121\",\"price\":\"121\"}";

    @Test
    public void getPieceTest() throws Exception {
        Mockito.when(piecesService.findById(Mockito.anyString())).thenReturn(Optional.of(mockPiece));
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
                "/pieces/testID").accept(
                MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        String expected = "{name:Anvelope-iarna,"+
                "model:Mercedes-benz,"+
                "utility:Piese-auto,"+
                "type:Anvelope,"+
                "owner:Tester121,"+
                "price:121}";
        JSONAssert.assertEquals(expected,result.getResponse().getContentAsString(),false);
    }
}
