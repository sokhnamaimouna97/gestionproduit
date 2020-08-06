import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private http:HttpClient) { }
  getAllCategories() :Observable<any>{
    return this.http.get<any>(environment.host+"/categories");
  }
  getProduit() :Observable<any>{
    return this.http.get<any>(environment.host+"/produits");

  }
  post(produit:any):Observable<any>{
    return this.http.post<any>(environment.host+"/produits",produit);
  }
  updateById(produit:any):Observable<any>{
    console.log(produit);
    return this.http.put<any>(environment.host+"/produits/"+produit.id_p,produit);
  }
  delete(id_p:number):Observable<any>{
    return this.http.delete<any>(environment.host+"/produits/"+id_p);
 }
 searchProduitBydesignation(designation:string):Observable<any>{
   return this.http.get<any>(environment.host+"/produits/search/"+designation)
 }

}
