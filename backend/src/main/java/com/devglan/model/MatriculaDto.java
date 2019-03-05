package com.devglan.model;

import java.util.Date;


public class MatriculaDto {

    private int id_aluno;
    private String nome_aluno;
    private int id_curso;
    private String nome_curso;
    private Date data_matricula;
    private Turno turno;
    
	public int getId_aluno() {
		return id_aluno;
	}
	
	public void setId_aluno(int id_aluno) {
		this.id_aluno = id_aluno;
	}
	
	public String getNome_aluno() {
		return nome_aluno;
	}
	
	public void setNome_aluno(String nome_aluno) {
		this.nome_aluno = nome_aluno;
	}
	
	public int getId_curso() {
		return id_curso;
	}
	
	public void setId_curso(int id_curso) {
		this.id_curso = id_curso;
	}
	
	public String getNome_curso() {
		return nome_curso;
	}
	
	public void setNome_curso(String nome_curso) {
		this.nome_curso = nome_curso;
	}
	
	public Date getData_matricula() {
		return data_matricula;
	}
	
	public void setData_matricula(Date data_matricula) {
		this.data_matricula = data_matricula;
	}
	
	public Turno getTurno() {
		return turno;
	}
	
	public void setTurno(Turno turno) {
		this.turno = turno;
	}

   
}
