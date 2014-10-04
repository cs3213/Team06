# Create the result.jsp file below name

<%@ page import="java.util.*" %>

<html>
<head>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<style>
	div {
		position:absolute;
  		background-color:#abc;
  		left:50px;
  		width:90px;
  		height:90px;
  		margin:5px;
	}
	</style>
</head>

<body>
<h1 align="center">Coffee Recommandation JSP View</h1>
<div class="block"></div>
<p>

<%
  List styles = (List) request.getAttribute("styles");
  Iterator it = styles.iterator();
  while(it.hasNext()) {
    out.print("<br>try: " + it.next()+"<br>");
    out.print("<input type=\"Submit\"/><br>");
    /* out.print("<img src=\"WebContent/WEB-INF/jsp/image1.jpeg\"/>"); */
    out.print("<script>$(\".block\").animate({\"left\": \"+=50px\"}, \"slow\");</script>");
    out.print("<script>$(\".block\").animate({height:'hide'}, \"slow\");</script>");
    out.print("<script>$(\".block\").animate({height:'show'}, \"slow\");</script>");
  }
%>

</body>
</html>