package br.com.bytebanck.banco.test;

import br.com.bytebanck.banco.modelo.Cliente;
import br.com.bytebanck.banco.modelo.ContaCorrente;
import br.com.bytebanck.banco.modelo.ContaPoupanca;

public class TesteArrayReferencias {

	public static void main(String[] args) {

		
		//int[] idades = new int[5];
		//Conta[] contas = new Conta[5];
		Object[] referencias = new Object[5];
		ContaCorrente cc1 = new ContaCorrente(22, 11);
        referencias[0] = cc1;

        ContaPoupanca cc2 = new ContaPoupanca(22, 22);
		referencias[1] = cc2;
		
		Cliente cliente = new Cliente();
		referencias[2] = cliente;
		
		//System.out.println(cc2.getNumero());
		//Object referenciaGenerica = contas[1];

        //System.out.println( referenciaGenerica.getNumero() )
		
		ContaPoupanca ref = (ContaPoupanca) referencias[1];
		System.out.println(cc2.getNumero());
		System.out.println(ref.getNumero());
	}

}
