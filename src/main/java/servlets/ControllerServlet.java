package servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet("/")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long startTime = System.currentTimeMillis();

        String xString = req.getParameter("x");
        String yString = req.getParameter("y");
        String rString = req.getParameter("r");

        if (xString == null || yString == null || rString == null) {
            getServletContext()
                    .getRequestDispatcher("/index.jsp")
                    .forward(req, resp);
            return;
        }

        req.setAttribute("startTime", startTime);
        getServletContext()
                .getRequestDispatcher("/result")
                .forward(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        getServletContext()
                .getRequestDispatcher("/index.jsp")
                .forward(req, resp);
    }
}
