import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder ,Validators } from '@angular/forms'
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  submitted=false;
  motcle:string;
  produits:Array<any>=[];

  constructor(private formBuilder:FormBuilder, private categorieservice:CategoriesService) { }

  ngOnInit() {
    this.searchForm=this.formBuilder.group({
      motcle:['',Validators.required],
})
  }
  get f(){
    return this.searchForm.controls;
}
    onSubmit(){
      this.submitted=true;
      if(this.searchForm.invalid){
        return;
      }
   const motcle=this.searchForm.value.motcle;
   console.log(motcle);
   this.categorieservice.searchProduitBydesignation(motcle).subscribe(res=>{
    this.produits=res;
    //console.log(res);
  },err=>{
    console.log(err);
  }
  )

  }



  }


