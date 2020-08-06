import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import {HttpClientModule} from'@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { EntreeComponent } from './entree/entree.component';
import { SortieComponent } from './sortie/sortie.component'
import { from } from 'rxjs';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AuthentificationComponent,
    CategoriesComponent,
    HeaderComponent,
    EntreeComponent,
    SortieComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
