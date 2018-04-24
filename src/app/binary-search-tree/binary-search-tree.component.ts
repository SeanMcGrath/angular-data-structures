import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DataStructureComponent } from '../data-structure.component';

import { BinarySearchTree, FoundNodeReport } from '../../structures/binarySearchTree';


function getRandomInts(count = 20) {
	return Array.from(Array(count).keys()).map(n => Math.floor(Math.random() * count) + 1)
}

function validateInput(input: string): boolean {
	return input && Number.isInteger(parseInt(input, 10));
}

@Component({
	selector: 'app-binary-search-tree',
	templateUrl: './binary-search-tree.component.html',
	styleUrls: ['./binary-search-tree.component.css']
})
export class BinarySearchTreeComponent extends DataStructureComponent {

	static readonly NAME: string = 'Binary Search Tree';
	static readonly URL: string = 'binary-search-tree';

	tree: BinarySearchTree;

	sanitizer: DomSanitizer;

	addButtonDisabled: boolean = true;

	findButtonDisabled: boolean = true;

	removeButtonDisabled: boolean = true;

	operationsTaken: number;

	nodeFound: boolean = false;

	constructor(sanitizer: DomSanitizer) {
		super();
		this.sanitizer = sanitizer;
		this.buildTree();
	}

	add(content: any) {
		this.tree.add(content);
	}

	find(content: any) {
		const foundReport: FoundNodeReport = this.tree.find(content);
		if (foundReport) {
			this.nodeFound = !!foundReport.node;
			this.operationsTaken = foundReport.operationsTaken;
		}
	}

	buildTree(count: number | string = 20) {
		if (typeof count === 'string') {
			count = parseInt(count, 10);
		}

		this.tree = new BinarySearchTree();
		if (count > 0) {
			getRandomInts(count).forEach(this.add.bind(this));
		}
	}

	onAddKeyup(content: any) {
		this.addButtonDisabled = validateInput(content);;
	}

	onFindKeyup(content: any) {
		this.findButtonDisabled = validateInput(content);;
	}

	onRemoveKeyup(content: any) {
		this.removeButtonDisabled = validateInput(content);
	}

	printInOrder() {
		let arr = [];
		this.tree.inOrder(node => arr.push(node.content));
		return arr.join(', ');
	}

	printPreOrder() {
		let arr = [];
		this.tree.preOrder(node => arr.push(node.content));
		return arr.join(', ');
	}

	printPostOrder() {
		let arr = [];
		this.tree.postOrder(node => arr.push(node.content));
		return arr.join(', ');
	}

	remove(value: number | string): void {
		if (typeof value === 'string') {
			value = parseInt(value);
		}

		this.tree.remove(value);
	}

}
