import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { AppRouterModule } from './router/app-router.module';
import { NavigationComponent } from './navigation/navigation.component';
import { BinarySearchTreeComponent } from './binary-search-tree/binary-search-tree.component';


@NgModule({
		declarations: [
				AppComponent,
				LinkedListComponent,
				NavigationComponent,
				BinarySearchTreeComponent
		],
		imports: [
				BrowserModule,
				FormsModule,
				AppRouterModule
		],
		providers: [],
		bootstrap: [AppComponent]
})
export class AppModule { }
