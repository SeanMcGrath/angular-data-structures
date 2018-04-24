import { Component } from '@angular/core';

import { DataStructureComponent } from '../data-structure.component';
import { LinkedListComponent } from '../linked-list/linked-list.component';
import { BinarySearchTreeComponent } from '../binary-search-tree/binary-search-tree.component';

@Component({
		selector: 'app-navigation',
		templateUrl: './navigation.component.html',
		styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
		structureComponents: DataStructureComponent[] = [
				LinkedListComponent,
				BinarySearchTreeComponent
		]
}
