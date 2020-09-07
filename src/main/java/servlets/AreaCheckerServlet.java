package servlets;

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
import java.util.List;
import java.util.Locale;

@WebServlet("/result")
public class AreaCheckerServlet extends HttpServlet {
    private static final double MIN_X = -5, MAX_X = 3;
    private static final double MIN_Y = -5, MAX_Y = 3;
    private static final double MIN_R = 1, MAX_R = 5;


    private final HitHistory hitHistory;


    public AreaCheckerServlet() {
        hitHistory = new HitHistory();
    }


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String xArrayString = req.getParameter("x");
        String yString = req.getParameter("y");
        String rString = req.getParameter("r");

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
            throw new RuntimeException("Wrong type of some arguments");
        }

        for (double x : xArray) {
            Hit hit = new Hit();
            hit.setX(x);
            hit.setY(y);
            hit.setR(r);
            hit.setCurrentDate(ZonedDateTime.now().format(DateTimeFormatter.ofPattern("MM:HH:YY", Locale.forLanguageTag("RU"))));
            hit.setHit(isHit(x, y, r));

            long startTime = Long.parseLong(req.getAttribute("startTime").toString());
            long endTime = System.currentTimeMillis();

            hit.setExecutionTime("" + (endTime - startTime));

            hitHistory.getHitList().add(hit);
        }

        req.setAttribute("hitHistory", hitHistory);
        getServletContext()
                .getRequestDispatcher("/result.jsp")
                .forward(req, resp);
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
