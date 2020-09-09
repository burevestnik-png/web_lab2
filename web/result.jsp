<%@ page contentType="text/html;charset=UTF-8"
         language="java"
%>
<%@ taglib prefix="c"
           uri="http://java.sun.com/jsp/jstl/core"
%>

<html>
<head>
    <title>Result</title>

    <link type="text/css"
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    >
    <link type="text/css"
          rel="stylesheet"
          href="${pageContext.request.contextPath}/stylesheets/home_styles.css"
    >
    <link type="text/css"
          rel="stylesheet"
          href="${pageContext.request.contextPath}/stylesheets/utility_classes.css"
    >
    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
    ></script>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
    >

    <link rel="shortcut icon"
          href="${pageContext.request.contextPath}/assets/favicon/favicon.ico"
    >
</head>
<body>
<jsp:include page="templates/header.html" />

<main class="container valign-wrapper" style="display:flex; flex-direction: column">
    <jsp:useBean id="currentHistory"
                 scope="session"
                 class="beans.HitHistory"
    />

    <div style="width: 100%;">
        <table class="centered highlight" style="margin: 2rem 0 3rem">
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>EXECUTION TIME</th>
                <th>RESULT</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="hit"
                       items="${currentHistory.getHitList()}">
                <tr>
                    <td>${hit.getX()}</td>
                    <td>${hit.getY()}</td>
                    <td>${hit.getR()}</td>
                    <td>${hit.getExecutionTime()}</td>
                    <td>${hit.isHit()}</td>
                </tr>
            </c:forEach>
<%--            <tr>--%>
<%--                <td>${lastHit.getX()}</td>--%>
<%--                <td>${lastHit.getY()}</td>--%>
<%--                <td>${lastHit.getR()}</td>--%>
<%--                <td>${lastHit.getExecutionTime()}</td>--%>
<%--                <td>${lastHit.isHit()}</td>--%>
<%--            </tr>--%>
            </tbody>
        </table>
    </div>

    <a href="${pageContext.request.contextPath}/api"
       class="btn cyan"
       id="go-back"
    >Go back</a>
</main>

<jsp:include page="templates/footer.html" />

<script type="module" src="${pageContext.request.contextPath}/scripts/result-page/index.js"></script>
</body>
</html>
