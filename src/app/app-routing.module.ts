

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ArticleGuard } from './article.guard';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';

const routes: Routes = [
  {path : "articles" , component : ArticlesComponent}, 
  {path : "add-article" , component : AddArticleComponent}, 
  {path : "add-categorie" , component : AddCategoriesComponent},
  {path: "updateArticle/:id" , component: UpdateArticleComponent},
  {path: 'login', component: LoginComponent}, 
  {path: "", redirectTo: "articles", pathMatch: "full" }, 
  {path: "", redirectTo: "categories", pathMatch: "full" }, 
  {path: 'forbidden', component: ForbiddenComponent},
  {path : "add-article", component : AddArticleComponent, canActivate:[ArticleGuard]}, 
  {path: "categories", component : CategoriesComponent}, 
  {path: "updateCategorie/:id", component: UpdateCategorieComponent}




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
