package servlets;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.Map;


@WebServlet("/api")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long startTime = System.currentTimeMillis();

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

        System.out.println(xString);
        Logger LOGGER_ADAPTER = LogManager.getLogger("ControllerServlet");
//        LoggerAdapter LOGGER_ADAPTER = LoggerAdapter.createDefault("ControllerServlet");
        LOGGER_ADAPTER.info("request: " + request.toString());
        LOGGER_ADAPTER.info("res: " + response.toString());
        LOGGER_ADAPTER.info("xString: " + xString);
        LOGGER_ADAPTER.info("yString: " + yString);
        LOGGER_ADAPTER.info("rString: " + rString);

        try {
            System.out.println(printFields(LOGGER_ADAPTER));
        } catch (IllegalAccessException e) {
            response.getWriter().println("Error epta");
            return;
        }

        if (xString == null || yString == null || rString == null) {
            getServletContext()
                    .getRequestDispatcher("/index.jsp")
                    .forward(request, response);
            return;
        }

        request.setAttribute("startTime", startTime);
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
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        getServletContext()
                .getRequestDispatcher("/index.jsp")
                .forward(req, resp);
    }
}
