class Node {
		next: Node;
		content: any;

		constructor(content: any) {
				this.content = content;
		}
}

export class LinkedList {
		static readonly NAME = 'Linked List';
		static readonly URL = '/list';

		private head: Node;
		private tail: Node;
		private _size: number = 0;

		add(content: any) {
				if (!this.head) {
						this.head = this.tail = new Node(content);
				} else {
						this.tail.next = new Node(content);
						this.tail = this.tail.next;
				}
				this._size++;
		}

		removeAt(index: number) {
				if (index == 0 && !this.isEmpty()) {
						this.head = this.head.next;
						return;
				}

				let walker: Node = this.head,
						i = 0;

				while (walker && i < index - 1) {
						walker = walker.next;
						i++;
				}

				if (walker && walker.next) {
						if (walker.next.next) {
								walker.next = walker.next.next;
						} else {
								walker.next = null;
						}
				}
		}

		remove(content: any) {
				if (!this.isEmpty() && this.head.content === content) {
						this.head = this.head.next;
						return;
				}

				let walker: Node = this.head,
						trailer: Node = walker;

				while (walker && walker.content !== content) {
						trailer = walker;
						walker = walker.next;
				}

				if (walker) {
						trailer.next = walker.next;
				}
		}

		isEmpty() {
				return this._size === 0;
		}

		get size() {
				return this._size
		}

		contains(content: any) {
				let walker: Node = this.head;
				while (walker) {
						if (walker.content === content) {
								return true;
						}
						walker = walker.next;
				}
				return false;
		}

		toString() {
				let str: String = '[',
						walker: Node = this.head;
				while (walker) {
						str += walker.content;
						walker = walker.next;
						if (walker) {
								str += ', ';
						}
				}
				str += ']';
				return str;
		}
}
