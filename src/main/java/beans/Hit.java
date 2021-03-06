package beans;

import java.io.Serializable;

public final class Hit implements Serializable {
    private static final long serialVersionUID = 465789L;

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

    @Override
    public String toString() {
        return "Hit{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", currentDate='" + currentDate + '\'' +
                ", executionTime='" + executionTime + '\'' +
                ", hit=" + hit +
                '}';
    }
}
