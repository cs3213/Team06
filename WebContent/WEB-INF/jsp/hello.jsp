<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="CSS/page.css">
</head>
<body>
 <h2>${message}</h2>
 <div id="editor"><p>Editor</p></div>
 <div id="player"><p>Player</p></div>
 <div id="source"><p>source</p></div>
 <div id="coordEditor"><p>coordEditor</p></div>
 
 <form action="testServlet">
First name: <input type="text" name="firstname"><br>
Last name: <input type="text" name="lastname"><br><br>
<input type="button" value="Submit">
</form>
 
</body>
</html>