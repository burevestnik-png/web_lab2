package servlets;

import adapter.LoggerAdapter;
import beans.HitHistory;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.Map;


@MultipartConfig
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
