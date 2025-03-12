//====================================================

// InOrder
// Left - Root - Right

// PreOrder
// Root - Left - Right

// PostOrder
// Left - Root -Right

//====================================================

// When to use BFS and DFS ?

// TimeComplexity is same for both (Visiting every node once).

// Space Complexity depends on the structure of the tree.
// For wide tree BFS takes up lot of space.
// For Deep long tree DFS takes up space.

// InOrder - Result will be in order (ascending)

// Preorder -  Can be used to export a tree structure so that
// it is easily reconstructed or copied.

//====================================================

// If you know a solution is not far from the root of the tree, 
// a breadth first search (BFS) might be better.

// If the tree is very deep and solutions are rare, depth first search (DFS) might 
// take an extremely long time, but BFS could be faster.

// If the tree is very wide, a BFS might need too much memory, so it might be 
// completely impractical.

// If solutions are frequent but located deep in the tree, BFS could be impractical.

// If the search tree is very deep you will need to restrict the search depth for 
// depth first search (DFS), anyway (for example with iterative deepening).

//====================================================
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value)
                return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value) {
        if (this.root === null)
            return false;
        var current = this.root
          , found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found)
            return undefined;
        return current;
    }
    contains(value) {
        if (this.root === null)
            return false;
        var current = this.root
          , found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    //====================================================
    BFS() {
        var node = this.root
          , data = []
          , queue = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        var data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder() {
        var data = [];
        function traverse(node) {
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left)
                traverse(node.left);
            data.push(node.value);
            if (node.right)
                traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    //====================================================
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
