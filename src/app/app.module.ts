import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { TaskComponent } from "./task/task.component";
import { ProductsComponent } from "./products/products.component";
import { ProductViewComponent } from "./product-view/product-view.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductidComponent } from './productid/productid.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductidComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
