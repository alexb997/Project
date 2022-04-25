package com.example.back.controller;

import com.example.back.service.PiecesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/pieces")
public class PiecesController {
    private final PiecesService piecesService;

    public PiecesController(PiecesService piecesService){
        this.piecesService=piecesService;
    }

    @GetMapping("/all")
    public ResponseEntity<String> getPieces() {
        System.out.println("You are inside pieces Controller");
        return new ResponseEntity(piecesService.findAll(),HttpStatus.OK);
    }
}
