import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { PicoReviewComponent } from './components/pico-review/pico-review.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'pico-preview', component: PicoReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
