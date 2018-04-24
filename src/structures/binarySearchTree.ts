const openTag = '<ul style="color: ';
const leftClass = 'green">';
const rightClass = 'red">'
const closeTag = '</ul>';

function treeToHTML(prefix: string, suffix: string, node: Node): string {
	if (!node) return "";
	let str = prefix + node.content.toString();
	if (node.right != null)
		str = str + treeToHTML(openTag + rightClass, closeTag, node.right);
	if (node.left != null)
		str = str + treeToHTML(openTag + leftClass, closeTag, node.left);
	return str + suffix;
}

function preorder(node: Node, fn: (n: Node) => any) {
	if (!node) {
		return;
	}
	fn(node);
	preorder(node.left, fn);
	preorder(node.right, fn);
}

function inorder(node: Node, fn: (n: Node) => any) {
	if (!node) {
		return;
	}
	preorder(node.left, fn);
	fn(node);
	preorder(node.right, fn);
}

function postorder(node: Node, fn: (n: Node) => any) {
	if (!node) {
		return;
	}
	preorder(node.left, fn);
	preorder(node.right, fn);
	fn(node);
}

function findInTree(root: Node, content: any, operations: number): FoundNodeReport {
	operations++;
	if (!root || root.content == content) {
		return new FoundNodeReport(root, operations);
	}

	if (content < root.content) {
		return findInTree(root.left, content, operations);
	}

	if (content > root.content) {
		return findInTree(root.right, content, operations);
	}
}

function minValueInTree(root: Node): Node {
	let currentNode = root;

	while (currentNode && currentNode.left) {
		currentNode = currentNode.left;
	}

	return currentNode;
}

function removeNode(root: Node, value: any): Node {
	if (!root) {
		return null;
	}

	if (value < root.content) {
		root.left = removeNode(root.left, value);
	} else if (value > root.content) {
		root.right = removeNode(root.right, value);
	} else if (value == root.content) {
		if (!root.left) {
			let temp = root.right;
			root = null;
			return temp;
		}
		
		if (!root.right) {
			let temp = root.left;
			root = null;
			return temp;
		}

		let successor = minValueInTree(root.right);
		root.content = successor.content;
		root.right = removeNode(root.right, successor.content);
	}

	return root;
}

export class FoundNodeReport {
	constructor(public node: Node, public operationsTaken: number) { }
}

class Node {
	content: any;
	left: Node;
	right: Node;

	constructor(content: any) {
		this.content = content;
	}

	add(newContent: any) {
		if (newContent <= this.content) {
			this.left ? this.left.add(newContent) : this.left = new Node(newContent);
		} else {
			this.right ? this.right.add(newContent) : this.right = new Node(newContent);
		}
	}
}

export class BinarySearchTree {

	private root: Node;

	add(content: any): BinarySearchTree {
		if (!this.root) {
			this.root = new Node(content);
		} else {
			this.root.add(content);
		}
		return this;
	}

	find(content: any): FoundNodeReport {
		return findInTree(this.root, content, 0);
	}

	remove(value: any): BinarySearchTree {
		removeNode(this.root, value);
		return this;
	}

	toString() {
		return treeToHTML('<ul>', '</ul>', this.root);
	}

	traverse(traversalFn, nodeFn) {
		traversalFn(this.root, nodeFn);
	}

	inOrder(nodeFn) {
		this.traverse(inorder, nodeFn);
	}

	preOrder(nodeFn) {
		this.traverse(preorder, nodeFn);
	}

	postOrder(nodeFn) {
		this.traverse(postorder, nodeFn);
	}

	get size() {
		let count = 0;
		this.inOrder(() => count++);
		return count;
	}

}
