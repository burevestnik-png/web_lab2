<%@ page contentType="text/html; charset=UTF-8"
         language="java"
         pageEncoding="utf-8" %>

<%
    String path = request.getContextPath();
%>

<html>
<head>
    <title>Web lab 2</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="<%= path %>/stylesheets/home_styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</head>
<body>
<nav>
    <div class="nav-wrapper cyan">
        <a href="https://github.com/burevestnik-png/web_lab2"
           target="_blank"
           rel="noreferrer noopener"
           class="brand-logo center">
            First time, second lab.
        </a>
    </div>
</nav>

<div class="container">
    <div class="row mt3 valign-wrapper">
        <div class="col s6 center">
            <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">

                <!-- Оси со стрелками   -->
                <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
                <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>
                <polygon fill="black" points="150,0 144,15 156,15" stroke="white"></polygon>
                <polygon fill="black" points="300,150 285,156 285,144" stroke="white"></polygon>

                <!-- Засечки    -->
                <line stroke="black" x1="200" x2="200" y1="155" y2="145"></line>
                <line stroke="black" x1="250" x2="250" y1="155" y2="145"/>

                <line stroke="black" x1="50" x2="50" y1="155" y2="145"/>
                <line stroke="black" x1="100" x2="100" y1="155" y2="145"/>

                <line stroke="black" x1="145" x2="155" y1="100" y2="100"/>
                <line stroke="black" x1="145" x2="155" y1="50" y2="50"/>

                <line stroke="black" x1="145" x2="155" y1="200" y2="200"/>
                <line stroke="black" x1="145" x2="155" y1="250" y2="250"/>

                <!-- Подписи к засечкам    -->
                <text fill="black" x="195" y="140">R/2</text>
                <text fill="black" x="248" y="140">R</text>

                <text fill="black" x="40" y="140">-R</text>
                <text fill="black" x="90" y="140">-R/2</text>

                <text fill="black" x="160" y="105">R/2</text>
                <text fill="black" x="160" y="55">R</text>

                <text fill="black" x="160" y="205">-R/2</text>
                <text fill="black" x="160" y="255">-R</text>

                <text fill="black" x="160" y="10">Y</text>
                <text fill="black" x="290" y="140">X</text>

                <!-- first figure triangle -->
                <polygon fill="blue"
                         fill-opacity="0.3"
                         points="150,50 150,150 250,150"
                         stroke="blue"></polygon>

                <!-- second figure rectangle-->
                <polygon fill="yellow"
                         fill-opacity="0.3"
                         points="100,150 100,50 150,50 150,150"
                         stroke="yellow"></polygon>

                <!-- third figure circle-->
                <path d="M 100 150 A 50 50, 90, 0, 0, 150 200 L 150 150 Z"
                      fill="green"
                      fill-opacity="0.3"
                      stroke="green"></path>


                <circle cx="150" cy="150" id="target-dot" r="0" stroke="black" fill="white"></circle>
            </svg>
        </div>

        <div class="col s6 row main-border">
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
            </form>
        </div>
    </div>
</div>
</body>
</html>
