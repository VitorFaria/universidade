package com.devglan.model;

import java.io.Serializable;
import javax.persistence.*;

@Embeddable
public class MatriculaId implements Serializable {

	public MatriculaId() {
	}

	public MatriculaId(int id_aluno, int id_curso) {
		this.id_aluno = id_aluno;
		this.id_curso = id_curso;
	}
	@Column(name = "id_aluno")
    private int id_aluno;
	@Column(name = "id_curso")
    private int id_curso;
	
	public int getId_aluno() {
		return id_aluno;
	}
	
	public void setId_aluno(int id_aluno) {
		this.id_aluno = id_aluno;
	}
	
	public int getId_curso() {
		return id_curso;
	}
	
	public void setId_curso(int id_curso) {
		this.id_curso = id_curso;
	}
	
	
}