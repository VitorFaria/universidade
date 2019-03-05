package com.devglan.model;

public enum Turno {
	INDEFINIDO(0),
	MANHA(1),
	TARDE(2),
	NOITE(3);
	
	private int numVal;
	
	Turno(int numVal) {
		this.numVal = numVal;
	}
	
	public int getNumVal() {
      return numVal;
  }

}

