package com.devglan.service;

import com.devglan.model.Disciplina;
import com.devglan.model.DisciplinaDto;

import java.util.List;

public interface DisciplinaService {

	Disciplina save(DisciplinaDto user) throws Exception;
    List<Disciplina> findAll();
    void delete(int id) throws Exception;

    List<Disciplina> findByNome(String nome);

    Disciplina findById(int id);

    DisciplinaDto update(DisciplinaDto disciplinaDto) throws Exception;
}
