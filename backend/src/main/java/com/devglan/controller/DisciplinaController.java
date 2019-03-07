package com.devglan.controller;

import com.devglan.model.ApiResponse;
import com.devglan.model.Disciplina;
import com.devglan.model.DisciplinaDto;
import com.devglan.service.DisciplinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import static com.rollbar.notifier.config.ConfigBuilder.withAccessToken;
import com.rollbar.notifier.Rollbar;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/disciplinas")
public class DisciplinaController {
	
	Rollbar rollbar;
	
	public DisciplinaController() {
		rollbar = Rollbar.init(withAccessToken("faketoken").build());
	}

    @Autowired
    private DisciplinaService disciplinaService;

    @PostMapping
    public ApiResponse<Disciplina> saveDisciplina(@RequestBody DisciplinaDto disciplina){
    	try {
    		return new ApiResponse<>(HttpStatus.OK.value(), "Disciplina salvo corretamente.",disciplinaService.save(disciplina));
    	} catch (Exception e) {
    		rollbar.error(e.getMessage());
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }

    @GetMapping
    public ApiResponse<List<Disciplina>> listDisciplina(@RequestParam(value="cursoFiltro", required=false) Integer cursoFiltro, @RequestParam(value="filtroNome", required=false) String filtroNome){  	
    	return new ApiResponse<>(HttpStatus.OK.value(), "Lista de disciplinas obtida corretamente.",disciplinaService.findAll(cursoFiltro, filtroNome));
    }

    @GetMapping("/{id}")
    public ApiResponse<Disciplina> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "Disciplina obtido corretamente.",disciplinaService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<DisciplinaDto> update(@RequestBody DisciplinaDto disciplinaDto) {
        try {
        	return new ApiResponse<>(HttpStatus.OK.value(), "Disciplina atualizado corretamente.",disciplinaService.update(disciplinaDto));
    	} catch (Exception e) {
    		rollbar.error(e.getMessage());
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
    	try {
    		disciplinaService.delete(id);
    		return new ApiResponse<>(HttpStatus.OK.value(), "Disciplina obtido corretamente.", null);
    	} catch (Exception e) {
    		rollbar.error(e.getMessage());
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }



}
