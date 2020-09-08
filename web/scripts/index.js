import App from "./App.js";
import Graph from "./utilities/services/Graph.js";

const app = new App(
    new Graph()
)

app.init();