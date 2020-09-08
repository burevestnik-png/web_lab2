package servlets;

import adapter.LoggerAdapter;
import beans.HitHistory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.Date;
import java.util.Map;


@WebServlet("/api")
public class ControllerServlet extends HttpServlet {
    private static final LoggerAdapter LOGGER_ADAPTER = LoggerAdapter.createDefault("ControllerServlet");

    private final HitHistory hitHistory;


    public ControllerServlet() {
        hitHistory = new HitHistory();
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        logRequest(request);

        long startTime = new Date().getTime();

        String xString = request.getParameter("xValues");
        String yString = request.getParameter("y");
        String rString = request.getParameter("r");

//        response.setContentType("text/html");
//        response.setCharacterEncoding("UTF-8");
//        response.setStatus(200);
//        response.getWriter().println("ЯРИК ПИДОР: " + xString + " " + yString + " " + rString);
////        response.getWriter().println("Parameters: ");
////        while (request.getParameterNames().hasMoreElements()) {
////            response.getWriter().println(request.getParameterNames().nextElement());
////        }
////
////        response.getWriter().println();
//
//        response.getWriter().println("ParameterMap: ");
//        for (Map.Entry<String, String[]> parameter : request.getParameterMap().entrySet()) {
//            response.getWriter().println(parameter.getKey() + ":");
//            for (String str : parameter.getValue()) {
//                response.getWriter().println("--" + str);
//            }
//        }
//
//        response.getWriter().println();
//
//        response.getWriter().println("Body:");
//        BufferedReader reader = request.getReader();
//        int intValueOfChar;
//        StringBuilder result = new StringBuilder();
//        while ((intValueOfChar = reader.read()) != -1) {
//            result.append((char) intValueOfChar);
//        }
//        response.getWriter().println(result.toString());
//
//        response.getWriter().println();
//
////        response.getWriter().println("-----");
////        try {
////            Field field = request.getClass().getDeclaredField("request");
////            field.setAccessible(true);
////            response.getWriter().println(printFields(field.get(request)));
////        } catch (IllegalAccessException | NoSuchFieldException e) {
////            response.getWriter().println(e);
////        }
//
//        return;

        if (xString == null || yString == null || rString == null) {
            LOGGER_ADAPTER.info("One of necessary parameters is not presented. Redirected on /index.jsp");
            request.setAttribute("hitHistory", hitHistory);
            getServletContext()
                    .getRequestDispatcher("/index.jsp")
                    .forward(request, response);
            return;
        }

        request.setAttribute("startTime", startTime);
        request.setAttribute("hitHistory", hitHistory);
        LOGGER_ADAPTER.info("Redirected on /result");
        getServletContext()
                .getRequestDispatcher("/result")
                .forward(request, response);
    }

    private int stopNumber = 0;

    private String printFields(Object object) throws IllegalAccessException {
        StringBuilder stringBuilder = new StringBuilder();
        for (Field field : object.getClass().getDeclaredFields()) {
            field.setAccessible(true);
            stringBuilder.append(field.getName() + ": " + field.get(object));
            stringBuilder.append(System.lineSeparator());
            stringBuilder.append("---fields: ");
            stringBuilder.append(System.lineSeparator());

//            field.get(object).getClass().getDeclaredFields();

//            if (stopNumber > 100 || field.get(object).getClass().getDeclaredFields().length == 0) {
//                return stringBuilder.toString();
//            }
//
//            stopNumber++;
//            stringBuilder.append(printFields(field.get(object)));
        }

        return stringBuilder.toString();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        logRequest(request);

        getServletContext()
                .getRequestDispatcher("/index.jsp")
                .forward(request, response);
    }

    private void logRequest(HttpServletRequest request) {
        LOGGER_ADAPTER.info("Got request from: " + request.getRemoteHost() + " " + request.getRemoteAddr() + ":" + request.getRemotePort());
        LOGGER_ADAPTER.info(request.getMethod());
        LOGGER_ADAPTER.info("Params: ");
        for (Map.Entry<String, String[]> record : request.getParameterMap().entrySet()) {
            String log = record.getKey() + " : ";
            for (String parameter : record.getValue()) {
                log += parameter + " ";
            }
            LOGGER_ADAPTER.info("---" + log);
        }
    }
}
