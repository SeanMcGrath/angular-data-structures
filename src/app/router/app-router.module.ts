import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LinkedListComponent } from '../linked-list/linked-list.component'
import { BinarySearchTreeComponent } from '../binary-search-tree/binary-search-tree.component'

const routes: Routes = [
		{ path: '', component: LinkedListComponent, pathMatch: 'full'},
		{ path: LinkedListComponent.URL, component: LinkedListComponent },
		{ path: BinarySearchTreeComponent.URL, component: BinarySearchTreeComponent }
]

@NgModule({
		imports: [ RouterModule.forRoot(routes) ],
		exports: [ RouterModule ]
})
export class AppRouterModule { }
