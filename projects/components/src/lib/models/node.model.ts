class Node {
    id: string;
    value: string;
    childrens: Array<Node>;

    originalData: object;

    constructor(data: any, options = {}) {

        this.idField = options['idField'] || 'id';
        this.displayField = options['displayField'] || 'value';
        this.childrenField = options['childrenField'] || 'childrens';

        this.id = data[this.idField];
        this.value = data[this.displayField];
        this.originalData = data;

        const childrens = data[this.childrenField];
        if (Array.isArray(childrens) && childrens.length > 0) {
            this.childrens = data[this.childrenField].map(item => new Node(item));
        }
    }
}


export default Node;