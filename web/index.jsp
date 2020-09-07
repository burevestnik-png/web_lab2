<%@ page contentType="text/html; charset=UTF-8"
         language="java"
         pageEncoding="utf-8" %>

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
<jsp:include page="/templates/header.html" />

<main class="container">
    <div class="row mt3 valign-wrapper">
        <div class="col s6 center">
            <jsp:include page="/templates/svg.html" />
        </div>

        <div class="col s6 row main-border hoverable mb0">
            <form>
                <p class="center-align">Choose hit options:</p>

                <div class="col s12 input-field">
                    <input id="y-value"
                           type="text"
                           autocomplete="off"
                           placeholder="Choose Y value:"
                    >
                    <label for="y-value">Y value</label>
                </div>

                <div class="col s12">
                    <p class="center-align">Choose X value:</p>
                </div>

                <div class="col s12 center pb2">
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

<jsp:include page="/templates/footer.html" />

<script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous">
</script>
<script src="${pageContext.request.contextPath}/scripts/utilities/Toast.js"></script>
<script src="${pageContext.request.contextPath}/scripts/initializer.js"></script>
</body>
</html>
