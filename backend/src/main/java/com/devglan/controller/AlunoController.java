package com.devglan.controller;

import com.devglan.model.ApiResponse;
import com.devglan.model.Aluno;
import com.devglan.model.AlunoDto;
import com.devglan.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/alunos")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @PostMapping
    public ApiResponse<Aluno> saveAluno(@RequestBody AlunoDto aluno){
        return new ApiResponse<>(HttpStatus.OK.value(), "Aluno saved successfully.",alunoService.save(aluno));
    }

    @GetMapping
    public ApiResponse<List<Aluno>> listAluno(){
        return new ApiResponse<>(HttpStatus.OK.value(), "Aluno list fetched successfully.",alunoService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<Aluno> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "Aluno fetched successfully.",alunoService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<AlunoDto> update(@RequestBody AlunoDto alunoDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "Aluno updated successfully.",alunoService.update(alunoDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        alunoService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "Aluno fetched successfully.", null);
    }



}
