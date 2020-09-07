<%@ page contentType="text/html; charset=UTF-8"
         language="java"
         pageEncoding="utf-8" %>

<%
    String path = request.getContextPath();
    String message = pageContext.getException().getMessage();
%>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Server error</title>
    <link rel="stylesheet" href="<%= path %>/stylesheets/error.css">
</head>
<body>
<div class="noise"></div>
<div class="overlay"></div>
<div class="terminal">
    <h1>Server error <span class="errorcode"><%= message %></span></h1>
    <p class="output">
        Please try to <a href="<%= path %>">return to the homepage</a>.
    </p>
    <p class="output">Good luck.</p>
</div>
</body>
</html>