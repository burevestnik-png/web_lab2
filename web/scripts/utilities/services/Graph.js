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

        const dotsObjects = sessionStorage.getItem("dotsObjects") ? JSON.parse(sessionStorage.getItem("dotsObjects")) : [];

        x.forEach(( value ) => {
            const dotObject = {
                x: value,
                y: y,
                r: r,
                isCalculated: isCalculated,
                radius: radius,
                relativeUnit: relativeUnit
            };

            const dot = document.createElementNS(svgns, 'circle');
            dot.setAttributeNS(null, 'cx', isCalculated ? value : 150 + relativeUnit * value);
            dot.setAttributeNS(null, 'cy', isCalculated ? y : 150 - relativeUnit * y);
            dot.setAttributeNS(null, 'class', "target-dot");
            dot.setAttributeNS(null, 'r', radius.toString());
            dot.setAttributeNS(null, 'style', 'fill: white; stroke: black;');

            container.appendChild(dot);
            dotsObjects.push(JSON.stringify(dotObject));
        });

        sessionStorage.setItem('dotsObjects', JSON.stringify(dotsObjects));
    }

    // clearSvg() {
    //     document.querySelectorAll('.target-dot').forEach(value => value.remove());
    // }

    getClickPoint( event ) {
        this.svgPoint.x = event.clientX;
        this.svgPoint.y = event.clientY;

        return this.svgPoint.matrixTransform(
            document.querySelector('svg')
                .getScreenCTM()
                .inverse()
        );
    }

    restoreDots() {
        const container = document.getElementById('svg');

        const svgns = "http://www.w3.org/2000/svg"

        if (sessionStorage.getItem("dotsObjects")) {
            JSON.parse(sessionStorage.getItem("dotsObjects")).forEach(value => {
                const dot = JSON.parse(value);
                const dotElement = document.createElementNS(svgns, 'circle');
                dotElement.setAttributeNS(null, 'cx', dot.isCalculated ? dot.x : 150 + dot.relativeUnit * dot.x);
                dotElement.setAttributeNS(null, 'cy', dot.isCalculated ? dot.y : 150 - dot.relativeUnit * dot.y);
                dotElement.setAttributeNS(null, 'class', "target-dot");
                dotElement.setAttributeNS(null, 'r', dot.radius.toString());
                dotElement.setAttributeNS(null, 'style', 'fill: white; stroke: black;');

                container.appendChild(dotElement);
            });
        }
    }
}