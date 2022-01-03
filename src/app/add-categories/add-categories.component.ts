import { Router } from '@angular/router';
import { CategorieService } from './../services/categorie.service';
import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html'
})
export class AddCategoriesComponent implements OnInit {


  newCategorie = new Categorie();
  message : string ; 

  constructor(private categorieService : CategorieService , private router : Router ) { }

  ngOnInit(): void {}
  //add produit
  
  

  addCategorie(){
    //console.log(this.newCategorie);
    this.categorieService.ajouterCategorie(this.newCategorie); 
    this.message= "Categorie "+ this.newCategorie.nomCat + " ajouter avec succés "; 
  
  }

  // addCategorie(){
  //   this.categorieService.ajouterCategorie(this.newCategorie)
  //   .subscribe(prod => {
  //  // console.log(prod);
  //   });
  //   this.router.navigate(['categories']);
  //   }

}
