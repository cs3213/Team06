package controller;

import domain.projectFile;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.ModelMap;
import java.util.*;

@Controller
public class SaveFile{
 
	private projectFile curProject;
	
   @RequestMapping(value="/test", method = RequestMethod.GET)
   public String printHello(ModelMap model) {
      model.addAttribute("message", "Hello Spring MVC Framework!");
      System.out.println("hello");
      return "test";
   }
   
   @RequestMapping(value="/test", method = RequestMethod.POST)
   public void saveFile(projectFile curProject) {
	      //FileContent.add(request.getParameter("inputSequence"));
	      //FileContent.add(request.getParameter("inputValue"));
	      //FileContent.add(lala);
	   this.curProject = curProject;
	      System.out.println(curProject.getCharacters()[0]);
	  //    return "test";
	   } 
   
   /*@RequestMapping(value="/getFile", method = {RequestMethod.POST, RequestMethod.GET})
   public @ResponseBody
   projectFile filecontent(HttpServletRequest request)
   {
    // FileContent.add("file1");
   //  System.out.println("controller");
     return curProject;
   }*/
}

