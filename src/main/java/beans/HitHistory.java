package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class HitHistory implements Serializable {
    private static final long serialVersionUID = 1234L;

    private List<Hit> hitList;


    public HitHistory() {
        hitList = new ArrayList<>();
    }


    public List<Hit> getHitList() {
        return hitList;
    }

    public void setHitList(List<Hit> hitList) {
        this.hitList = hitList;
    }
}