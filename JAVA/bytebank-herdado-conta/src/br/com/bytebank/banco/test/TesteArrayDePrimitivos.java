package br.com.bytebank.banco.test;

public class TesteArrayDePrimitivos {

	//Array[]
	public static void main(String[] args) {

		int[] idades = new int[5];//inicializa o array com os valores padrões
		
		for(int i = 0; i < idades.length; i++) {
			idades[i] = i * i;
		}
		
		for(int i = 0; i < idades.length; i++) {
			System.out.println(idades[i]);
		}
		
//		idades[0] = 29;
//		idades[1] = 39;
//		idades[2] = 19;
//		idades[3] = 69;
//		idades[4] = 59;
//		
//		int idade4 = idades[4];
//
//		System.out.println(idade4);
//		
//		System.out.println(idades.length);
	}

}
