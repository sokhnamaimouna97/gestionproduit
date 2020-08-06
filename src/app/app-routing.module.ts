import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  {path : 'produits' , component: ProduitsComponent},
  {path : 'categories' , component: CategoriesComponent},
  {path : 'search' , component: SearchComponent},
  {path : 'authentification' , component: AuthentificationComponent},

 // {path : 'authentification' , component: AuthentificationComponent},
  {path:'' , redirectTo:'/produits' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
