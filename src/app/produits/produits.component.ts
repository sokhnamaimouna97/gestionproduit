import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder ,Validators } from '@angular/forms'
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produitForm: FormGroup;
  submitted=false;
  produits:Array<any>=[];
  categories:Array <any>=[];
  btnEdit=false;
  btnAdd=true;
  produit:any;

  constructor(private formBuilder:FormBuilder, private categorieservice:CategoriesService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.produitForm=this.formBuilder.group({
      reference:['',Validators.required],
      designation:['',Validators.required],
      prix:['',Validators.required],
      id_c:['',Validators.required],
      quantite:['',Validators.required]
     //photo:['',Validators.required],
})
      this.getProduit();
      this.getAllCategories();

}
  get f(){
    return this.produitForm.controls;
}
    onSubmit(){
      this.submitted=true;
      this.btnEdit=false;
      this.btnAdd=true;
      if(this.produitForm.invalid){
        return;
      }

    const p={
      reference:this.produitForm.value.reference,
      designation:this.produitForm.value.designation,
      prix:this.produitForm.value.prix,
      id_c:this.produitForm.value.id_c,
      quantite:this.produitForm.value.quantite,
      //photo:this.photo
   }
    console.log(p);
      this.categorieservice.post(p).subscribe(res=>{
      this.getProduit();
  },err=>{
    console.log(err);
  }
  )
  }
  updateById(item){
    this.produit=item;
    this.f.designation.setValue(item.designation),
    this.f.prix.setValue(item.prix),
    this.f.quantite.setValue(item.quantite)
    this.btnEdit=true;
    this.btnAdd=false;

}
onEdit(){
  this.btnAdd=false;
  this.btnEdit=true;
  const p={
    designation:this.produitForm.value.designation,
    prix:this.produitForm.value.prix,
    quantite:this.produitForm.value.quantite,
    id_p:this.produit.id_p,
  }
   this.categorieservice.updateById(p).subscribe(res=>{
    this.getProduit();
  },err=>{
    console.log(err);
  }
  )
}
 delete(item){
  this.categorieservice.delete(item.id_p).subscribe(res=>{
  this.getProduit();
 },err=>{
  console.log(err);
}
)
}
  getProduit(){
    this.categorieservice.getProduit().subscribe(res=>{
      //console.log(res);
    this.produits=res;
    },err=>{
    console.log(err);
    }
    )

  }
  getAllCategories(){
    this.categorieservice.getAllCategories().subscribe(res=>{
    this.categories=res;
    },err=>{
      console.log(err);
    })
  }

}












