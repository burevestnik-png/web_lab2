export default class Graph {
    static $dotTarget = $('#target-dot');
    static svgPoint = document.querySelector('svg').createSVGPoint();

    static changeDotRadius(radius) {
        this.$dotTarget.attr('r', radius);
    }

    static changeDotPosition(x, y, r,
                             isCalculated = false,
                             radius = 3) {
        const relativeUnit = 100 / r;

        this.changeDotRadius(radius);
        this.$dotTarget.attr("cy", isCalculated ? y : 150 - relativeUnit * y);
        this.$dotTarget.attr("cx", isCalculated ? x : 150 + relativeUnit * x);
    }

    static getClickPoint(event) {
        this.svgPoint.x = event.clientX;
        this.svgPoint.y = event.clientY;

        return this.svgPoint.matrixTransform(
            document.querySelector('svg')
                .getScreenCTM()
                .inverse()
        );
    }
}