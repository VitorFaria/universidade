package com.devglan.service;

import com.devglan.model.Aluno;
import com.devglan.model.AlunoDto;

import java.util.List;

public interface AlunoService {

    Aluno save(AlunoDto user);
    List<Aluno> findAll();
    void delete(int id);

    List<Aluno> findByNome(String nome);

    Aluno findById(int id);

    AlunoDto update(AlunoDto userDto);
}
