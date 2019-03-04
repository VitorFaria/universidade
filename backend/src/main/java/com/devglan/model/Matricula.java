package com.devglan.model;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "matricula")
public class Matricula {
		
	@EmbeddedId
    private MatriculaId id;
	
	@ManyToOne
    @JoinColumn(name="id_aluno", insertable=false, updatable=false)
    private Aluno aluno;

    @ManyToOne
    @JoinColumn(name="id_curso", insertable=false, updatable=false)
    private Curso curso;
    
    @Column(columnDefinition="date")
    private Date data_matricula;

}
