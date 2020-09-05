<%@ page contentType="text/html; charset=UTF-8"
         language="java"
         pageEncoding="utf-8" %>
<html>
  <head>
    <title>Web lab 2</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </head>
  <body>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Logo</a>
      </div>
    </nav>

  <div class="container">
    <div class="row">
      <div class="s6">
        <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">

          <!-- Оси со стрелками   -->
          <line stroke="white" x1="0" x2="300" y1="150" y2="150"></line>
          <line stroke="white" x1="150" x2="150" y1="0" y2="300"></line>
          <polygon fill="white" points="150,0 144,15 156,15" stroke="white"></polygon>
          <polygon fill="white" points="300,150 285,156 285,144" stroke="white"></polygon>

          <!-- Засечки    -->
          <line stroke="white" x1="200" x2="200" y1="155" y2="145"></line>
          <line stroke="white" x1="250" x2="250" y1="155" y2="145"/>

          <line stroke="white" x1="50" x2="50" y1="155" y2="145"/>
          <line stroke="white" x1="100" x2="100" y1="155" y2="145"/>

          <line stroke="white" x1="145" x2="155" y1="100" y2="100"/>
          <line stroke="white" x1="145" x2="155" y1="50" y2="50"/>

          <line stroke="white" x1="145" x2="155" y1="200" y2="200"/>
          <line stroke="white" x1="145" x2="155" y1="250" y2="250"/>

          <!-- Подписи к засечкам    -->
          <text fill="white" x="195" y="140">R/2</text>
          <text fill="white" x="248" y="140">R</text>

          <text fill="white" x="40" y="140">-R</text>
          <text fill="white" x="90" y="140">-R/2</text>

          <text fill="white" x="160" y="105">R/2</text>
          <text fill="white" x="160" y="55">R</text>

          <text fill="white" x="160" y="205">-R/2</text>
          <text fill="white" x="160" y="255">-R</text>

          <text fill="white" x="160" y="10">Y</text>
          <text fill="white" x="290" y="140">X</text>

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


          <circle cx="150" cy="150" id="target-dot" r="0" stroke="white" fill="white"></circle>
        </svg>

        <div class="s6">
          <form>
            <div class="y-value-group">
              <input id="y-value" type="text" autocomplete="off">
              <label class="y-value-label" for="y-value">Y value</label>
            </div>

            <div class="radio-wrapper">
              <div class="x-value-group">
                    <span>
                        X value:
                    </span>

                <div>
                  <div class="form_radio_button">
                    <input id="radio-1" type="radio" name="x-group" value="-4">
                    <label for="radio-1">-4</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-2" type="radio" name="x-group" value="-3">
                    <label for="radio-2">-3</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-3" type="radio" name="x-group" value="-2">
                    <label for="radio-3">-2</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-4" type="radio" name="x-group" value="-1">
                    <label for="radio-4">-1</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-5" type="radio" name="x-group" value="0">
                    <label for="radio-5">0</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-6" type="radio" name="x-group" value="1">
                    <label for="radio-6">1</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-7" type="radio" name="x-group" value="2">
                    <label for="radio-7">2</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-8" type="radio" name="x-group" value="3">
                    <label for="radio-8">3</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-9" type="radio" name="x-group" value="4">
                    <label for="radio-9">4</label>
                  </div>
                </div>
              </div>

              <div class="r-value-group">
                    <span>
                        R value:
                    </span>

                <div>
                  <div class="form_radio_button">
                    <input id="radio-10" type="radio" name="r-group" value="1">
                    <label for="radio-10">1</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-11" type="radio" name="r-group" value="2">
                    <label for="radio-11">2</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-12" type="radio" name="r-group" value="3">
                    <label for="radio-12">3</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-13" type="radio" name="r-group" value="4">
                    <label for="radio-13">4</label>
                  </div>

                  <div class="form_radio_button">
                    <input id="radio-14" type="radio" name="r-group" value="5">
                    <label for="radio-14">5</label>
                  </div>
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </body>
</html>
