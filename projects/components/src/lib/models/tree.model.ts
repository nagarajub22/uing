import Node from "./node.model";

class TreeModel {

    private nodes: Array<Node>;

    constructor(items: Array<any>, options = {}) {
        this.setData(items);
    }

    // getters
    public getNodes() {
        return this.nodes;
    }

    // Private Methods
    private setData(items: Array<any>) {
        this.nodes = items.map(item => (new Node(item)));
    }
}

export default TreeModel;