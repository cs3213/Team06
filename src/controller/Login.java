package controller;

import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;


/**
 * Handles and retrieves the common or admin page depending on the URI template.
 * A user must be log-in first he can access these pages. Only the admin can see
 * the adminpage, however.
 */
/*
@Controller
@SessionAttributes("user")
public class Login {
	protected static Logger logger = Logger.getLogger("controller");

	@Autowired
	//private UserManager userManager;

	@RequestMapping("/hello")
	public static ModelAndView showNewLogin(HttpServletRequest request) {
		HttpSession session = request.getSession();
		session.setAttribute("page", session.getAttribute("page"));
		if (session.getAttribute("lastpage") == null)
			session.setAttribute("lastpage", "hello");
		else
			session.setAttribute("lastpage", session.getAttribute("lastpage"));

		return new ModelAndView("loginform", "command", new User());
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ModelAndView login(HttpServletRequest request,
			@ModelAttribute("loginform") User user) {
		HttpSession session = request.getSession();
		if (session.getAttribute("page") == null)
			session.setAttribute("page", "hello");
		else
			session.setAttribute("page", session.getAttribute("page"));
		if (session.getAttribute("lastpage") == null)
			session.setAttribute("lastpage", "hello");
		else
			session.setAttribute("lastpage", session.getAttribute("lastpage"));

		if (this.userManager.getUserPassword(user.getUsername(),
				user.getPassword()) != null) {
			session.setAttribute(
					"user",
					this.userManager.getUserPassword(user.getUsername(),
							user.getPassword()));

			return new ModelAndView(new RedirectView(session.getAttribute(
					"lastpage").toString()));
		}
		return showNewLogin(request);
	}

	/**
	 * @param response
	 */
/*
	@RequestMapping("/Logout")
	public static ModelAndView Logout(HttpServletRequest request,
			HttpServletResponse response) {
		HttpSession session = request.getSession();
		session.invalidate();
		return showNewLogin(request);
	}

}*/


