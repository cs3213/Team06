package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.ui.ModelMap;

import domain.projectFile;
import domain.FileValue;

import java.util.*;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("*")
public class MainController{

	private projectFile curProject = new projectFile();

	@RequestMapping(value="/index", method = RequestMethod.GET)
	public String printHello(ModelMap model) {
		System.out.println("index");
		return "index";
	}

	@RequestMapping(value="/index", method = RequestMethod.POST)
	public @ResponseBody String[][] saveFile(@RequestBody FileValue value, HttpServletRequest request) {
        String inputValue = value.getInputValue();
		String tempArray[];
        System.out.println("lalalala");
		tempArray = inputValue.split("\\|");
        String temp[][] = new String[tempArray.length][];
		for (int i = 0; i < tempArray.length; i ++){
			temp[i] = tempArray[i].split(",");
		}
		return temp;
	} 
	@RequestMapping(value="/getFile", method = {RequestMethod.POST, RequestMethod.GET})
	public @ResponseBody
	List<String> filecontent(HttpServletRequest request)
	{
		String result;
		result = curProject.getCharacters()[0];
		System.out.println(result);
		List<String> res = new ArrayList<String>();
		res.add(result);
		return res;
	}

}

