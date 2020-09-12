export default class Graph {
    svgPoint

    constructor() {
        this.svgPoint = document.querySelector('svg').createSVGPoint();
    }

    drawDots( x, y, r,
              isCalculated = false,
              radius = 3 ) {
        const relativeUnit = 100 / r;

        const svgns = "http://www.w3.org/2000/svg"
        const container = document.getElementById('svg');

        x.forEach(( value ) => {
            const dot = document.createElementNS(svgns, 'circle');
            dot.setAttributeNS(null, 'cx', isCalculated ? value : 150 + relativeUnit * value);
            dot.setAttributeNS(null, 'cy', isCalculated ? y : 150 - relativeUnit * y);
            dot.setAttributeNS(null, 'class', "target-dot");
            dot.setAttributeNS(null, 'r', radius.toString());
            dot.setAttributeNS(null, 'style', 'fill: white; stroke: black;');

            container.appendChild(dot);
        })
    }

    clearSvg() {
        document.querySelectorAll('.target-dot').forEach(value => value.remove());
    }

    getClickPoint( event ) {
        this.svgPoint.x = event.clientX;
        this.svgPoint.y = event.clientY;

        return this.svgPoint.matrixTransform(
            document.querySelector('svg')
                .getScreenCTM()
                .inverse()
        );
    }
}