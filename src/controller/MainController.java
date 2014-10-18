package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.ModelMap;

import domain.projectFile;

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
	   public String saveFile(projectFile curProject) {
		   this.curProject = curProject;
		      System.out.println(curProject.getCharacters()[0]);
		      return "success";
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

