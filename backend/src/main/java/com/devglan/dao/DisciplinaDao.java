package com.devglan.dao;

import org.springframework.data.repository.CrudRepository;
import com.devglan.model.Disciplina;

public interface DisciplinaDao  extends CrudRepository<Disciplina, Integer> {

	Disciplina findByNome(String nome);
}
