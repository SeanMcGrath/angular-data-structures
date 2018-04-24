import { Component, OnInit } from '@angular/core';

import { DataStructureComponent } from '../data-structure.component'
import { LinkedList } from '../../structures/linkedList'

@Component({
		selector: 'app-linked-list',
		templateUrl: './linked-list.component.html',
		styleUrls: ['./linked-list.component.css']
})
export class LinkedListComponent extends DataStructureComponent {

		static readonly NAME: string = 'Linked List';
		static readonly URL: string = 'linked-list';

		private _list: LinkedList = new LinkedList();

		addButtonDisabled: boolean = true;

		removeItemButtonDisabled: boolean = true;

		containsTestItem: any = '';

		constructor() {
				super();
		}

		onAddKeyup(content: string) {
				this.addButtonDisabled = !content.length;
		}

		add = (content: any) => {
				this._list.add(content);
				this.addButtonDisabled = true;
		}

		removeAt(index: number) {
				this._list.removeAt(index);
		}

		onRemoveItemKeyup(content: string) {
				this.removeItemButtonDisabled = !content.length;
		}

		removeContent(content: any) {
				this._list.remove(content);
		}

		contains(content: any) {
				return this._list.contains(content);
		}

		get list() {
				return this._list;
		}

}
