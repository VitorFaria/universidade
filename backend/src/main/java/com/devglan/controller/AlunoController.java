package com.devglan.controller;

import com.devglan.model.ApiResponse;
import com.devglan.model.Aluno;
import com.devglan.model.AlunoDto;
import com.devglan.service.AlunoService;
import com.rollbar.notifier.Rollbar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import static com.rollbar.notifier.config.ConfigBuilder.withAccessToken;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/alunos")
public class AlunoController {
	
	Rollbar rollbar;
	
	public AlunoController() {
		rollbar = Rollbar.init(withAccessToken("faketoken").build());
	}

    @Autowired
    private AlunoService alunoService;

    @PostMapping
    public ApiResponse<Aluno> saveAluno(@RequestBody AlunoDto aluno){
    	try {
    		return new ApiResponse<>(HttpStatus.OK.value(), "Aluno salvo corretamente.",alunoService.save(aluno));
    	} catch (Exception e) {
    		rollbar.error(e.getMessage());
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }

    @GetMapping
    public ApiResponse<List<Aluno>> listAluno(){
        return new ApiResponse<>(HttpStatus.OK.value(), "Lista de alunos obtida corretamente.",alunoService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<Aluno> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "Aluno obtido corretamente.",alunoService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<AlunoDto> update(@RequestBody AlunoDto alunoDto) {
        try {
        	return new ApiResponse<>(HttpStatus.OK.value(), "Aluno atualizado corretamente.",alunoService.update(alunoDto));
    	} catch (Exception e) {
    		rollbar.error(e.getMessage());
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        alunoService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "Aluno obtido corretamente.", null);
    }



}
