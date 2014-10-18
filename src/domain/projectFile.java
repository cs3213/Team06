package domain;
import java.util.*;

public class projectFile {
	private String characters[];
	private String inputSequence[][];
	private String inputValue[][];
	
	public String[] getCharacters() {
		System.out.println(characters[0]);
		return characters;
	}
	public void setCharacters(String characters[]) {
		this.characters = characters;
	}
	public String[][] getInputSequence() {
		return inputSequence;
	}
	public void setInputSequence(String inputSequence[][]) {
		this.inputSequence = inputSequence;
	}
	public String[][] getInputValue() {
		return inputValue;
	}
	public void setInputValue(String inputValue[][]) {
		this.inputValue = inputValue;
	}
	
}
