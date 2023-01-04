package br.com.bytebanck.banco.test;

import br.com.bytebanck.banco.modelo.Conta;
import br.com.bytebanck.banco.modelo.ContaCorrente;
import br.com.bytebanck.banco.modelo.SaldoInsuficienteException;

public class TesteSaca {

	public static void main(String[] args) {

		Conta conta = new ContaCorrente(123, 321);
		
		conta.deposita(200.00);
		try {
			conta.saca(210.0);
		} catch (SaldoInsuficienteException ex) {
			System.out.println("EX: " + ex.getMessage());
		}
		
		System.out.println(conta.getSaldo());
		
		
	}

}
