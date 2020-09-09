<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Result</title>
</head>
<body>
<jsp:include page="templates/header.html"/>

<div class="container valign-wrapper">
<%--        Use here bean--%>
    <a href="${pageContext.request.contextPath}/" class="btn">Go back</a>
</div>

<jsp:include page="templates/footer.html"/>
</body>
</html>
