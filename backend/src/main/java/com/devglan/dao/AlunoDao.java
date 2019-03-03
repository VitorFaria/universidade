package com.devglan.dao;

import com.devglan.model.Aluno;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoDao extends CrudRepository<Aluno, Integer> {

	Aluno findByNome(String nome);
}
