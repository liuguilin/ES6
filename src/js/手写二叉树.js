class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.val > newNode.val) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(val) {
        let current = this.root;
        while (current) {
            if (val === current.val) {
                return true;
            }
            if (current.val < val) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return false;
    }

    preorderTraversal() {
        this.preorderTraversalNode(this.root);
    }

    preorderTraversalNode(root) {
        if (root !== null) {
            console.log("root =", root.val);
            this.preorderTraversalNode(root.left);
            this.preorderTraversalNode(root.right);
        }
    }

    delete(val) {
        let current = this.root;
        let parent = null;
        let isLeft = false;
        if (current.val === val) {
            this.root = null;
            return true;
        }

        while (current) {
            if (current.val === val) {
                if (!current.left && !current.right)
                    if (isLeft) {
                        parent.left = null;
                        return true;
                    } else {
                        parent.right = null;
                        return true;
                    }
            } else if (!current.left || !current.right) {
                if (current.left && isLeft) {
                    parent.left = current.left;
                } else if (current.right && isLeft) {
                    parent.left = null;
                } else if (current.left && !isLeft) {
                    parent.right = null;
                } else {
                    parent.right = current.right;
                }
                return true;
            }

            if (current.val < val) {
                isLeft = false;
                parent = current;
                current = current.right;
            } else {
                isLeft = true;
                parent = current;
                current = current.left;
            }
        }
        return false;
    }
}

let BSTTest = new BinarySearchTree();
BSTTest.insert(11);
BSTTest.insert(6);
BSTTest.insert(12);
BSTTest.insert(4);
BSTTest.insert(9);
BSTTest.insert(10);
BSTTest.insert(7);
BSTTest.insert(8);
BSTTest.delete(4);
console.log(BSTTest);
