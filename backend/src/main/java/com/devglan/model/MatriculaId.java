package com.devglan.model;

import java.io.Serializable;
import javax.persistence.*;

@Embeddable
public class MatriculaId implements Serializable {

	@Column(name = "id_aluno")
    private int id_aluno;
	@Column(name = "id_curso")
    private int id_curso;
}