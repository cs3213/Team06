package com.example.web;


import com.example.model.*;

import javax.mail.Session;
import javax.servlet.*;
import javax.servlet.http.*;

import java.io.*;
import java.util.*;

public class Register extends HttpServlet {

  public void doPost( HttpServletRequest request, 
                      HttpServletResponse response) 
                      throws IOException, ServletException {

    

    // Now use our Coffee Model above 
    

    List result = new ArrayList();
    HttpSession session = request.getSession();
    //System.out.println(session.getAttribute("firstname").toString());
    result.add(request.getParameterValues("firstname"));
    result.add(request.getParameterValues("lastname"));

    // Use the below code to debug the program if you get problems 
    //response.setContentType("text/html"):
    //PrintWriter out = response.getWriter();
    //out.println("Coffee Selection Advise<br>");

    //Iterator it = result.iterator();
    //while(it.hasNext()) {
    //  out.print("<br>try: " + it.next());
    //}

    // The results will be passed back (as an attribute) to the JSP view
    // The attribute will be a name/value pair, the value in this case will be a List object 
    request.setAttribute("styles", result);
    RequestDispatcher view = request.getRequestDispatcher("registerResult.jsp");
    view.forward(request, response); 
  }
}
