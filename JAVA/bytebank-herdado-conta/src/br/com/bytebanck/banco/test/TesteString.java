package br.com.bytebanck.banco.test;

public class TesteString {

	public static void main(String[] args) {
		
		String nome = "Alura"; //object literal
		//String outro = new String("alura");
		
				
		String vazio = " Alura ";
		String outroVazio = vazio.trim();
		System.out.println(outroVazio.isEmpty());

		System.out.println(vazio.contains("Alu"));
		System.out.println(outroVazio);
		
		System.out.println(nome.length());
		
		for(int i = 0; i < nome.length(); i++) {
			System.out.println(nome.charAt(i));
		}
		
//		String sub = nome.substring(1);
//		System.out.println(sub);
		
//		int pos = nome.indexOf("ur");
//		System.out.println(pos);
		
//		char c = nome.charAt(2);
//		System.out.println(c);
		
//		char c = 'A';
//		char d = 'a';
//		String outra = nome.replace(c, d);
		
		//String outra = nome.toLowerCase();
//		
//		System.out.println(nome);
//		System.out.println(outra);

	}

}
