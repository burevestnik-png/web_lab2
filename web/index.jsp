<%@ page contentType="text/html; charset=UTF-8"
         language="java"
         pageEncoding="utf-8" %>

<%
    String[] checkboxValues = {"-5", "-4", "-3", "-2", "-1", "&nbsp;0", "&nbsp;1", "&nbsp;2", "&nbsp;3"};
    String[] buttonValues = {"1", "2", "3", "4", "5"};
%>

<html>
<head>
    <title>Web lab 2</title>

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/stylesheets/home_styles.css">
    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/stylesheets/utility_classes.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <link rel="shortcut icon" href="${pageContext.request.contextPath}/assets/favicon/favicon.ico">
</head>
<body>
<jsp:include page="/templates/header.html"/>

<main class="container valign-wrapper">
    <div class="row valign-wrapper" style="margin-top: 3rem;">
        <div class="col s6 center">
            <jsp:include page="/templates/svg.html"/>
        </div>

        <div class="col s6 row main-border hoverable">
            <form>
                <p class="center-align">Choose hit options:</p>

                <div class="col s12 input-field">
                    <input id="y-value"
                           type="text"
                           autocomplete="off"
                           placeholder="Write Y value"
                    >
                    <label for="y-value">Y value</label>
                </div>

                <div class="col s12">
                    <p class="center-align">Choose X value:</p>
                    <div class="x-group">
                        <%
                            for (String value : checkboxValues) {
                                out.println("<label class=\"valign-wrapper\">");
                                out.println("<div class=\"center\">");
                                out.println("<input type=\"checkbox\"");
                                out.println("value=\"" + value + "\"");
                                out.println("name=\"x-group\"");
                                out.println("class=\"filled-in center cyan\"/>");
                                out.println("<span> " + value + "</span>");
                                out.println("</div>");
                                out.println("</label>");
                            }
                        %>
                    </div>
                </div>

                <div class="col s12" style="margin: 3rem 0 2.5rem;">
                    <p class="center-align">Choose R value:</p>
                    <div class="center">
                        <%
                            for (String value : buttonValues) {
                                out.println("<button class=\"cyan waves-effect waves-light btn r-btn\" type=\"button\">");
                                out.println(value);
                                out.println("</button>");
                            }
                        %>
                    </div>
                    <p class="center-align"
                       style="font-size: .8rem;"
                    >
                        Current R:
                        <span id="current-r"
                              style="font-style: italic;"
                        >
                            No value selected
                        </span>
                    </p>
                </div>

                <div class="col s12 center" style="padding-bottom: 2rem;">
                    <button class="cyan waves-effect waves-light btn w8 mr1"
                            id="submit"
                    >
                        Submit
                        <i class="material-icons right">send</i>
                    </button>
                    <button class="cyan waves-effect waves-light btn w8"
                            id="reset"
                    >
                        Reset
                        <i class="material-icons right">delete</i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</main>

<jsp:include page="/templates/footer.html"/>
<jsp:include page="/templates/modal.html"/>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous">
</script>
<script type="module" src="${pageContext.request.contextPath}/scripts/initializer.js"></script>
</body>
</html>
