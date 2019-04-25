class Graph {
    constructor() {
        this.nodes = new Map();
    }
    addVertex(v) {
        this.nodes.set(v.key, []);
    }
    getNodes() {
        return this.nodes;
    }
    addEdge(v, w) {
        this.nodes.get(v.key).push({ key: w.key, x: w.x, y: w.y });
        this.nodes.get(w.key).push({ key: v.key, x: v.x, y: v.y });
    }
    dfs(start) {
        const visited = [];
        for (const v of this.nodes.keys()) {
            visited[v];
        }
        this.DFSUtil(start, visited);
    }
    DFSUtil(verticle, visited) {
        visited[verticle.key] = true;
        console.log(verticle);
        const edges = this.nodes.get(verticle.key);
        for (const i in edges) {
            const element = edges[i];
            if (!visited[element.key]) {
                this.DFSUtil(element, visited);
            }
        }
    }
}
const graph = new Graph();
const vertices = [
    { key: 1, x: 0, y: 0 }, { key: 2, x: 1, y: 0 }, { key: 3, x: 2, y: 0 }, { key: 4, x: 3, y: 0 }, { key: 5, x: 4, y: 0 }, { key: 6, x: 5, y: 0 },
    { key: 7, x: 0, y: 1 }, { key: 8, x: 1, y: 1 }, { key: 9, x: 2, y: 1 }, { key: 10, x: 3, y: 1 }, { key: 11, x: 4, y: 1 }, { key: 12, x: 5, y: 1 },
    { key: 13, x: 0, y: 2 }, { key: 14, x: 1, y: 2 }, { key: 15, x: 2, y: 2 }, { key: 16, x: 3, y: 2 }, { key: 17, x: 4, y: 2 }, { key: 18, x: 5, y: 2 },
    { key: 19, x: 0, y: 3 }, { key: 20, x: 1, y: 3 }, { key: 21, x: 2, y: 3 }, { key: 22, x: 3, y: 3 }, { key: 23, x: 4, y: 3 }, { key: 24, x: 5, y: 3 },
    { key: 25, x: 0, y: 4 }, { key: 26, x: 1, y: 4 }, { key: 27, x: 2, y: 4 }, { key: 28, x: 3, y: 4 }, { key: 29, x: 4, y: 4 }, { key: 30, x: 5, y: 4 },
    { key: 31, x: 0, y: 5 }, { key: 32, x: 1, y: 5 }, { key: 33, x: 2, y: 5 }, { key: 34, x: 3, y: 5 }, { key: 35, x: 4, y: 5 }, { key: 36, x: 5, y: 5 }
];
for (const v of vertices) {
    graph.addVertex(v);
}
graph.addEdge({ key: 1, x: 0, y: 0 }, { key: 7, x: 0, y: 1 });
graph.addEdge({ key: 7, x: 0, y: 1 }, { key: 13, x: 0, y: 2 });
graph.addEdge({ key: 13, x: 0, y: 2 }, { key: 14, x: 1, y: 2 });
graph.addEdge({ key: 25, x: 0, y: 4 }, { key: 31, x: 0, y: 5 });
graph.addEdge({ key: 31, x: 0, y: 5 }, { key: 32, x: 1, y: 5 });
graph.addEdge({ key: 14, x: 1, y: 2 }, { key: 15, x: 2, y: 2 });
graph.addEdge({ key: 32, x: 1, y: 5 }, { key: 33, x: 2, y: 5 });
graph.addEdge({ key: 3, x: 2, y: 0 }, { key: 9, x: 2, y: 1 });
graph.addEdge({ key: 9, x: 2, y: 1 }, { key: 15, x: 2, y: 2 });
graph.addEdge({ key: 15, x: 2, y: 2 }, { key: 21, x: 2, y: 3 });
graph.addEdge({ key: 21, x: 2, y: 3 }, { key: 27, x: 2, y: 4 });
graph.addEdge({ key: 27, x: 2, y: 4 }, { key: 33, x: 2, y: 5 });
graph.addEdge({ key: 21, x: 2, y: 3 }, { key: 22, x: 3, y: 3 });
graph.addEdge({ key: 33, x: 2, y: 5 }, { key: 34, x: 3, y: 5 });
graph.addEdge({ key: 22, x: 3, y: 3 }, { key: 23, x: 4, y: 3 });
graph.addEdge({ key: 34, x: 3, y: 5 }, { key: 35, x: 4, y: 5 });
graph.addEdge({ key: 17, x: 4, y: 2 }, { key: 23, x: 4, y: 3 });
graph.addEdge({ key: 23, x: 4, y: 3 }, { key: 29, x: 4, y: 4 });
graph.addEdge({ key: 29, x: 4, y: 4 }, { key: 35, x: 4, y: 5 });
graph.addEdge({ key: 5, x: 4, y: 0 }, { key: 6, x: 5, y: 0 });
graph.addEdge({ key: 23, x: 4, y: 3 }, { key: 24, x: 5, y: 3 });
graph.addEdge({ key: 35, x: 4, y: 5 }, { key: 36, x: 5, y: 5 });
graph.addEdge({ key: 6, x: 5, y: 0 }, { key: 12, x: 5, y: 1 });
console.log("DFS");
graph.dfs({ key: 1, x: 0, y: 0 });
//# sourceMappingURL=dfs.js.map