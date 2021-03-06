package servlets;

import adapter.LoggerAdapter;
import beans.Hit;
import beans.HitHistory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@WebServlet("/result")
public class AreaCheckerServlet extends HttpServlet {
    private static final LoggerAdapter LOGGER_ADAPTER = LoggerAdapter.createDefault("AreaCheckerServlet");


    private static final double MIN_X = -5, MAX_X = 3;
    private static final double MIN_Y = -5, MAX_Y = 3;
    private static final double MIN_R = 1, MAX_R = 5;


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String xArrayString = request.getParameter("xValues");
        String yString = request.getParameter("y");
        String rString = request.getParameter("r");

        List<Double> xArray = new ArrayList<>();
        double y;
        double r;

        String[] xStrings = xArrayString.split(" +");

        try {
            for (String xString : xStrings) {
                xArray.add(Double.parseDouble(xString));
            }

            y = Double.parseDouble(yString);
            r = Double.parseDouble(rString);
        } catch (NumberFormatException exception) {
            LOGGER_ADAPTER.errorThrowable("Wrong types of parameters", exception);
            throw new RuntimeException("Wrong type of some arguments");
        }

        HitHistory hitHistory = (HitHistory) request.getAttribute("hitHistory");
        HitHistory currentHistory = new HitHistory();

        for (double x : xArray) {
            Hit hit = new Hit();
            hit.setX(x);
            hit.setY(y);
            hit.setR(r);
            hit.setCurrentDate(ZonedDateTime.now().format(DateTimeFormatter.ofPattern("MM:HH:YY", Locale.forLanguageTag("RU"))));
            hit.setHit(isHit(x, y, r));

            long startTime = Long.parseLong(request.getAttribute("startTime").toString());
            long endTime = new Date().getTime();

            hit.setExecutionTime("" + (endTime - startTime));

            hitHistory.getHitList().add(hit);
            currentHistory.getHitList().add(hit);
            LOGGER_ADAPTER.debug("Hit added in history: " + hit);
        }

        LOGGER_ADAPTER.info("Redirected on /result.jsp");
        LOGGER_ADAPTER.debug("HitHistory: " + request.getAttribute("hitHistory"));
        request.setAttribute("currentHistory", currentHistory);
        getServletContext()
                .getRequestDispatcher("/result.jsp")
                .forward(request, response);
    }

    private boolean isHit(double x, double y, double r) {
        if (x < MIN_X || x > MAX_X) {
            return false;
        }

        if (y < MIN_Y || y > MAX_Y) {
            return false;
        }

        if (r < MIN_R || r > MAX_R) {
            return false;
        }

        return isRectangle(x, y, r) || isTriangle(x, y, r) || isCircle(x, y, r);
    }

    private boolean isRectangle(double x, double y, double r) {
        return x >= 0 && x <= r / 2 && y >= -r && y <= 0;
    }

    private boolean isTriangle(double x, double y, double r) {
        return x >= -r && x <= 0 && y >= (-0.5 - r / 2) && y <= 0;
    }

    private boolean isCircle(double x, double y, double r) {
        return x <= 0 && y >= 0 && Math.sqrt(x * x + y * y) <= r;
    }
}
