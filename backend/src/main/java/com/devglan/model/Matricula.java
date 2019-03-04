package com.devglan.model;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "matricula")
public class Matricula {
		
	@EmbeddedId
    private MatriculaId matriculaId;
	
	@ManyToOne
    @JoinColumn(name="id_aluno", insertable=false, updatable=false)
    private Aluno aluno;

    @ManyToOne
    @JoinColumn(name="id_curso", insertable=false, updatable=false)
    private Curso curso;
    
    @Column(columnDefinition="date")
    private Date data_matricula;

	public Matricula(MatriculaId matriculaId) {
		this.matriculaId = matriculaId;
	}

	public Matricula() {
	}

	public MatriculaId getMatriculaId() {
		return matriculaId;
	}

	public void setMatriculaId(MatriculaId matriculaId) {
		this.matriculaId = matriculaId;
	}

	public Aluno getAluno() {
		return aluno;
	}

	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public Date getData_matricula() {
		return data_matricula;
	}

	public void setData_matricula(Date data_matricula) {
		this.data_matricula = data_matricula;
	}
    
    

}
