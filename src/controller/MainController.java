package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.ModelMap;

import java.util.*;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("*")
public class MainController{
 
	private List<String> FileContent=new ArrayList<String>();
		
	@RequestMapping(value="/index", method = RequestMethod.GET)
   public String printHello(ModelMap model) {
      model.addAttribute("message", "Hello Spring MVC Framework!");
      System.out.println("index");
      return "index";
   }
	
	@RequestMapping(value="/index", method = RequestMethod.POST)
	   public String saveFile(HttpServletRequest request) {
		      FileContent.add(request.getParameter("inputSequence"));
		      FileContent.add(request.getParameter("inputValue"));
		      return "index";
		   } 
   

}

