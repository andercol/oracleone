package br.com.bytebanck.banco.test;

import br.com.bytebanck.banco.modelo.Conta;
import br.com.bytebanck.banco.modelo.ContaCorrente;
import br.com.bytebanck.banco.modelo.GuardadorDeContas;
import br.com.bytebanck.banco.modelo.GuardadorDeReferencias;

public class TesteGuardadorReferencias {

	public static void main(String[] args) {
		
		GuardadorDeReferencias guardador = new GuardadorDeReferencias();
		
		Conta cc  = new ContaCorrente(22, 11);
		guardador.adiciona(cc);
		Conta cc2  = new ContaCorrente(22, 22);
		guardador.adiciona(cc2);
		
		int tamanho = guardador.getQuantidadeDeElementos();
		System.out.println(tamanho);
		
		Conta ref = (Conta) guardador.getReferencia(1);
		System.out.println(ref.getNumero());

	}

}
