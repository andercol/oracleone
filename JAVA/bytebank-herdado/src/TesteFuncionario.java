
public class TesteFuncionario {

	public static void main(String[] args) {


		Gerente nico = new Gerente(); 
				nico.setNome("Nico Stepat");
		nico.setCpf("223355646-9");
		nico.setSalario(2500.80);
		
		System.out.println(nico.getNome());
		System.out.println(nico.getBonificacao());
	}

}
