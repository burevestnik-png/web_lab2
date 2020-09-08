export default class Graph {
    $dotTarget
    svgPoint

    constructor() {
        this.$dotTarget = $('#target-dot');
        this.svgPoint = document.querySelector('svg').createSVGPoint();
    }

    changeDotRadius(radius) {
        this.$dotTarget.attr('r', radius);
    }

    changeDotPosition(x, y, r,
                             isCalculated = false,
                             radius = 3) {
        const relativeUnit = 100 / r;

        this.changeDotRadius(radius);
        this.$dotTarget.attr("cy", isCalculated ? y : 150 - relativeUnit * y);
        this.$dotTarget.attr("cx", isCalculated ? x : 150 + relativeUnit * x);
    }

    getClickPoint(event) {
        this.svgPoint.x = event.clientX;
        this.svgPoint.y = event.clientY;

        return this.svgPoint.matrixTransform(
            document.querySelector('svg')
                .getScreenCTM()
                .inverse()
        );
    }
}