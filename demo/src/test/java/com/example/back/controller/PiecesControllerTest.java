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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
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
@WebMvcTest(value = PiecesController.class)
@WithMockUser
public class PiecesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PiecesService piecesService;

    Pieces mockPiece = new Pieces("Anvelope-iarna","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);

    String mockPieceJSON ="{\"name\":\"Anvelope-iarna\",\"model\":\"Mercedes-benz\",\"utility\":\"Piese auto\",\"type\":\"Anvelope\",\"owner\":\"Tester121\",\"price\":\"121\"}";

    @Test
    public void getAllPiecesTest() throws Exception {
        Pieces mockPiece2 = new Pieces("Anvelope-vara","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);
        Pieces mockPiece3 = new Pieces("Motor","Tesla","Piese-auto","Electric","Tester121",121);
        List<Pieces> mockPieces= new ArrayList<>();
        mockPieces.add(mockPiece);
        mockPieces.add(mockPiece2);
        mockPieces.add(mockPiece3);
        Page<Pieces> pagePieces= new PageImpl<>(mockPieces);

        Mockito.when(piecesService.allPieces(Mockito.any(Pageable.class))).thenReturn(pagePieces);
        RequestBuilder requestBuilderGet = MockMvcRequestBuilders.get(
                "/pieces/all").accept(
                MediaType.APPLICATION_JSON);

        mockMvc.perform(requestBuilderGet).andDo(print()).andExpect(status().isOk())
                .andExpect(jsonPath("$.items",hasSize(3)));
    }

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

    @Test
    public void getFilteredPiecesTest() throws Exception {
        Pieces mockPiece2 = new Pieces("Anvelope-vara","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);
        List<Pieces> mockPieces= new ArrayList<>();
        mockPieces.add(mockPiece);
        mockPieces.add(mockPiece2);
        Page<Pieces> pagePieces= new PageImpl<>(mockPieces);

        Mockito.when(piecesService.findByFilters(Mockito.anyMap(),Mockito.any(Pageable.class))).thenReturn(pagePieces);
        RequestBuilder requestBuilderGet = MockMvcRequestBuilders.get(
                "/pieces/filter").accept(
                MediaType.APPLICATION_JSON);

        mockMvc.perform(requestBuilderGet).andDo(print()).andExpect(status().isOk())
                .andExpect(jsonPath("$.items",hasSize(2)));
    }

    @Test
    public void addPieceTest() throws Exception{
        Mockito.when(piecesService.addPiece(Mockito.any(Pieces.class))).thenReturn(mockPiece);
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/pieces/add")
                .accept(MediaType.APPLICATION_JSON).content(mockPieceJSON)
                .contentType(MediaType.APPLICATION_JSON);

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();
        assertEquals(HttpStatus.CREATED.value(), response.getStatus());
    }

    @Test
    public void editPieceTest() throws Exception{
        Pieces mockPieceUpdated = new Pieces("Anvelope-vara","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);
        String mockPieceUpdatedJSON = "{\"name\":\"Anvelope-vara\",\"model\":\"Mercedes-benz\",\"utility\":\"Piese auto\",\"type\":\"Anvelope\",\"owner\":\"Tester121\",\"price\":\"121\"}";

        Mockito.when(piecesService.findById(Mockito.anyString())).thenReturn(Optional.of(mockPiece));
        Mockito.when(piecesService.editPiece(Mockito.any(Pieces.class))).thenReturn(mockPieceUpdated);

        RequestBuilder requestBuilderGet = MockMvcRequestBuilders.get(
                "/pieces/someID").accept(
                MediaType.APPLICATION_JSON);
        RequestBuilder requestBuilderPut = MockMvcRequestBuilders
                .put("/pieces/edit/someID")
                .accept(MediaType.APPLICATION_JSON).content(mockPieceUpdatedJSON)
                .contentType(MediaType.APPLICATION_JSON);

        MvcResult resultGet = mockMvc.perform(requestBuilderGet).andReturn();
        System.out.println(resultGet.getResponse());
        String expected = "{name:Anvelope-iarna,"+
                "model:Mercedes-benz,"+
                "utility:Piese-auto,"+
                "type:Anvelope,"+
                "owner:Tester121,"+
                "price:121}";
        JSONAssert.assertEquals(expected, resultGet.getResponse()
                .getContentAsString(), false);

        MvcResult resultPut = mockMvc.perform(requestBuilderPut).andReturn();
        String expectedUpdate = "{name:Anvelope-vara,"+
                "model:Mercedes-benz,"+
                "utility:Piese-auto,"+
                "type:Anvelope,"+
                "owner:Tester121,"+
                "price:121}";
        JSONAssert.assertEquals(expectedUpdate, resultPut.getResponse()
                .getContentAsString(),false);
    }

    @Test
    public void deletePieceTest() throws Exception{
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .delete("/pieces/delete/deleteID")
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();
        assertEquals(204,response.getStatus());
    }

    @Test
    public void deleteAllPiecesTest() throws Exception{
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .delete("/pieces/deleteAll")
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();
        assertEquals(204,response.getStatus());
    }
}
