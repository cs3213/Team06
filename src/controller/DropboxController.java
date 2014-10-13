package controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dropbox.core.*;

import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.util.Locale;

import javax.servlet.*;
import javax.servlet.http.*;


@Controller
@RequestMapping(value = "/dropbox")
public class DropboxController extends HttpServlet{
	
	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView startConnection(HttpServletRequest request, HttpServletResponse response)
		    throws ServletException, IOException, DbxException {
		System.out.println("come to dropbox");
		 final String APP_KEY = "hpcnnotex154ndg";
	     final String APP_SECRET = "9xdifz0gazks2jd";

	     DbxAppInfo appInfo = new DbxAppInfo(APP_KEY, APP_SECRET);

	     DbxRequestConfig config = new DbxRequestConfig("JavaTutorial/1.0",
	            Locale.getDefault().toString());
	     DbxWebAuthNoRedirect webAuth = new DbxWebAuthNoRedirect(config, appInfo);

	     // Have the user sign in and authorize your app.
	     String authorizeUrl = webAuth.start();
	     System.out.println(authorizeUrl);
	     
	     String code="ddICkX558lQAAAAAAAADaSLsLGud-dI1nu7-4R13SKM";
	     code =code.trim();
	     
	     DbxAuthFinish authFinish = webAuth.finish(code);
	     String accessToken = authFinish.accessToken;

	     DbxClient client = new DbxClient(config, accessToken);

	     System.out.println("Linked account: " + client.getAccountInfo().displayName);


	        DbxEntry.WithChildren listing = client.getMetadataWithChildren("/");
	        System.out.println("Files in the root path:");
	        for (DbxEntry child : listing.children) {
	            System.out.println("	" + child.name + ": " + child.toString());
	        }

	        FileOutputStream outputStream = new FileOutputStream("magnum-opus.txt");
	        try {
	            DbxEntry.File downloadedFile = client.getFile("/magnum-opus.txt", null,
	                outputStream);
	            System.out.println("Metadata: " + downloadedFile.toString());
	        } finally {
	            outputStream.close();
	        }
	     
	     return new ModelAndView("dropbox", "message", "hello");
	         
	}
}
