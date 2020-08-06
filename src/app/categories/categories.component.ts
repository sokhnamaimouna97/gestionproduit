import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { FormGroup ,FormBuilder ,Validators } from '@angular/forms'
import { Router } from '@angular/router';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categorieForm: FormGroup;
  submitted=false;
  categories:Array<any>=[];

  constructor(private formBuilder:FormBuilder ,private categorieservice:CategoriesService, private router:Router) { }

  ngOnInit() {
      this.categorieservice.getAllCategories().subscribe(res=>{
      this.categories=res;
    },err=>{
      console.log(err);
    }
    )
  }


  }



