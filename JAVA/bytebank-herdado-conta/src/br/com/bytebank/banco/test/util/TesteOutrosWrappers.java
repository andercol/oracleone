package br.com.bytebank.banco.test.util;

import java.util.ArrayList;
import java.util.List;

public class TesteOutrosWrappers {

	public static void main(String[] args) {

		Integer idadeRef = Integer.valueOf(29);// Autobaxing
		System.out.println(idadeRef.intValue());//Unboxing
		

		Double dRef = Double.valueOf(3.2);// Autobaxing
		System.out.println(dRef.doubleValue());//Unboxing
		
		Boolean bRef = Boolean.FALSE;// Autobaxing
		System.out.println(bRef.booleanValue());//Unboxing
		
		//Number refNumero = Integer.valueOf(29.9);
		Number refNumero = Float.valueOf(29.9f);
		
		List<Number> lista = new ArrayList<>();
		lista.add(10);
		lista.add(32.6);
		lista.add(25.6f);
		
		for(Number num : lista) {
			System.out.println("Numero: " + num);
		}
	}

}
