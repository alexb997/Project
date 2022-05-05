package com.example.back.service;

import com.example.back.model.Pieces;
import com.example.back.repository.PiecesRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
public class PiecesServiceTest {
    @Mock
    private PiecesRepository piecesRepository;

    @InjectMocks
    private PiecesService piecesService;

    private Pieces mockPiece = new Pieces("Anvelope-iarna","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);

    @Test
    public void findByIdTest() throws Exception{
        Mockito.when(piecesRepository.findById(Mockito.anyString())).thenReturn(Optional.of(mockPiece));

        Optional<Pieces> result = piecesService.findById("SomeID");
        System.out.println(result.toString());
        assertThat(result).isNotEmpty();
    }

    @Test
    public void allPiecesTest() throws Exception{
        List<Pieces> mockPieceList= new ArrayList<>();
        Pieces mockPiece2 = new Pieces("Anvelope-vara","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);
        Pieces mockPiece3 = new Pieces("Motor","Tesla","Piese-auto","Electric","Tester121",121);
        Pieces mockPiece4 = new Pieces("Fereastra","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);

        mockPieceList.add(mockPiece);
        mockPieceList.add(mockPiece2);
        mockPieceList.add(mockPiece3);
        mockPieceList.add(mockPiece4);
        Page<Pieces> mockPagePieces= new PageImpl<>(mockPieceList);
        Mockito.when(piecesRepository.findAll(Mockito.any(Pageable.class))).thenReturn(mockPagePieces);
        Page<Pieces> result = piecesService.allPieces(PageRequest.of(0,3));

        assertThat(result.getTotalElements()).isEqualTo(mockPagePieces.getTotalElements());
        System.out.println(result.getTotalElements());
    }

    @Test
    public void addPiecesTest() throws Exception{
        Mockito.when(piecesRepository.save(Mockito.any(Pieces.class))).thenReturn(mockPiece);

        Pieces result = piecesService.addPiece(new Pieces());
        String expected ="Pieces{name='Anvelope-iarna', model='Mercedes-benz', utility='Piese-auto', type='Anvelope', owner='Tester121', price=121}";

        assertThat(result.toString()).isEqualTo(expected);
        System.out.println(result);
    }

    @Test
    public void editPiecesTest() throws Exception{
        Mockito.when(piecesRepository.save(Mockito.any(Pieces.class))).thenReturn(mockPiece);
        mockPiece.setModel("Magical");
        Pieces result = piecesService.addPiece(new Pieces());
        String expected ="Pieces{name='Anvelope-iarna', model='Magical', utility='Piese-auto', type='Anvelope', owner='Tester121', price=121}";

        assertThat(result.toString()).isEqualTo(expected);
        System.out.println(result);
        mockPiece.setModel("Mercedes-benz");
    }

    @Test
    public void findByFiltersTest() {
        List<Pieces> mockPieceList= new ArrayList<>();
//        List<Pieces> mockPieceList2= new ArrayList<>();
        Pieces mockPiece2 = new Pieces("Anvelope-vara","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);
        Pieces mockPiece3 = new Pieces("Motor","Tesla","Piese-auto","Electric","Tester121",121);
        Pieces mockPiece4 = new Pieces("Fereastra","Mercedes-benz","Piese-auto","Anvelope","Tester121",121);

        mockPieceList.add(mockPiece);
        mockPieceList.add(mockPiece2);
        mockPieceList.add(mockPiece3);
        mockPieceList.add(mockPiece4);

//        mockPieceList2.add(mockPiece2);
//        mockPieceList2.add(mockPiece3);

        Map<String,String> mockFilters= new HashMap<>();

        Page<Pieces> mockPagePieces= new PageImpl<>(mockPieceList);
        Mockito.when(piecesRepository.findAllByNameMatchesRegexAndUtilityMatchesRegexAndModelMatchesRegexAndTypeMatchesRegex(Mockito.anyString(),Mockito.anyString(),Mockito.anyString(),Mockito.anyString(),Mockito.any(Pageable.class))).thenReturn(mockPagePieces);
        Page<Pieces> result = piecesService.findByFilters(mockFilters,PageRequest.of(0,3));

        assertThat(result.getTotalElements()).isEqualTo(mockPagePieces.getTotalElements());
        System.out.println(result.getTotalElements());
    }
//
    @Test
    public void removeByIDTest(){
        String mockId = "someID";
        piecesService.removePieceById(mockId);
        Mockito.verify(piecesRepository).deleteById(mockId);
    }

    @Test
    public void removeAllTest(){
        piecesService.removeAllPieces();
        Mockito.verify(piecesRepository).deleteAll();
    }
}
