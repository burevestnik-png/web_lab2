package servlets;

import beans.Hit;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

@WebServlet("/result")
public class AreaCheckerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String xString = req.getParameter("xValues");
        String yString = req.getParameter("y");
        String rString = req.getParameter("r");

        double x;
        double y;
        double r;

        try {
            x = Double.parseDouble(xString);
            y = Double.parseDouble(yString);
            r = Double.parseDouble(rString);
        } catch (NumberFormatException exception) {
            throw new RuntimeException("Wrong type of some arguments");
        }

        Hit hit = new Hit();
        hit.setX(x);
        hit.setY(y);
        hit.setR(r);
        hit.setCurrentDate(ZonedDateTime.now().format(DateTimeFormatter.ofPattern("MM:HH:YY", Locale.forLanguageTag("RU"))));
        hit.setHit(isHit(x, y, r));

        long startTime = Long.parseLong(req.getAttribute("startTime").toString());
        long endTime = System.currentTimeMillis();

        hit.setExecutionTime("" + (endTime - startTime));

        req.setAttribute("hit", hit);
        getServletContext()
                .getRequestDispatcher("/result.jsp")
                .forward(req, resp);
    }

    private boolean isHit(double x, double y, double r) {
        return true;
    }
}
