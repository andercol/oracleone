
public class TestaCondicional2 {
	public static void main(String[] args) {

		System.out.println("testando condicionais");

		int idade = 20;
		int quantidadePessoas = 3;
		boolean acompanhado = quantidadePessoas >= 2;
		
		System.out.println("o valor de acompanhado � " + acompanhado);
		
		if (idade >= 18 && acompanhado) {
			System.out.println("seja bem vindo");
		} else {
			System.out.println("infelizmente voc� n�o pode entrar");
		}
		
		// operador 'ou' ||
		// operador 'e' &&
	}
}
