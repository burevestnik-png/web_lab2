<%@ page contentType="text/html; charset=UTF-8"
         language="java"
         pageEncoding="utf-8"
%>

<%
    String path = request.getContextPath();
%>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0"
    >
    <title>404</title>
    <link rel="stylesheet"
          href="<%= path %>/stylesheets/error.css"
    >
</head>
<body>
<div class="noise"></div>
<div class="overlay"></div>
<div class="terminal">
    <h1>Error <span class="errorcode">404</span></h1>
    <p class="output">
        The page you are looking for might have been removed, had its name changed or is temporarily
        unavailable.
    </p>
    <p class="output">
        Please try to <a href="<%= path %>">return to the homepage</a>.
    </p>
    <p class="output">Good luck.</p>
</div>
</body>
</html>