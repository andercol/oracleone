package br.com.alura;

import java.util.Comparator;

public class OrdenaPorIdade implements Comparator<Funcionario>{

	@Override
	public int compare(Funcionario funcionario1, Funcionario funcionario2) {
		return funcionario1.getIdade() - funcionario2.getIdade();
	}
 
}



