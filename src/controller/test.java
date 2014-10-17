package controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.ModelMap;
import java.util.*;

@Controller
public class test{
 
	private List<String> FileContent=new ArrayList<String>();
	
   @RequestMapping(value="/test", method = RequestMethod.GET)
   public String printHello(ModelMap model) {
      model.addAttribute("message", "Hello Spring MVC Framework!");
      System.out.println("hello");
      return "test";
   }
   
   @RequestMapping(value="/test", method = RequestMethod.POST)
   public String saveFile(HttpServletRequest request) {
	      FileContent.add(request.getParameter("inputSequence"));
	      FileContent.add(request.getParameter("inputValue"));
	      System.out.println(FileContent.toString());
	      return "test";
	   } 
   
   @RequestMapping(value="/getFile", method = {RequestMethod.POST, RequestMethod.GET})
   public @ResponseBody
   List<String> filecontent(HttpServletRequest request)
   {
     FileContent.add("file1");
     System.out.println("controller");
     return FileContent;
   }
}

