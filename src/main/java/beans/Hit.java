package beans;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public final class Hit {
    private double x;
    private double y;
    private double r;

    private String currentDate;
    private String executionTime;

    private boolean hit;


    public Hit() {
        currentDate = "";
        executionTime = "";
    }


    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getCurrentDate() {
        currentDate = ZonedDateTime.now().format(DateTimeFormatter.ofPattern("MM:HH:YY", Locale.forLanguageTag("RU")));
        return currentDate;
    }

    public void setCurrentDate(String currentDate) {
        this.currentDate = currentDate;
    }

    public String getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(String executionTime) {
        this.executionTime = executionTime;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }
}
