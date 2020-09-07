class DataExtractor {
    static getValues() {
        return {
            x: this.getX(),
            y: this.getY(),
            r: this.getR()
        }
    }

    static getX() {
        const xValues = [];

        $('input[name="x-group"]:checked').each(function () {
            xValues.push(Number($(this).val()));
        });

        return xValues;
    }

    static getR() {
        return Number($('input[name="r-group"]:checked').val());
    }

    static getY() {
        const $yValue = $('#y-value');
        let yValue = ($yValue.val() ? $yValue.val() : "mokString");

        if (yValue.includes(',')) {
            yValue = yValue.replace(",", ".")
        }

        return yValue;
    }
}