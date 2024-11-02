import { Component } from '@angular/core';
import { Article } from '../article';
import { AddArticleComponent } from '../add-article/add-article.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AddArticleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  Articles = [
    new Article(1,"Minecraft","https://m.media-amazon.com/images/M/MV5BNjQzMDlkNDctYmE3Yi00ZWFiLTlmOWYtMjI4MzQ4Y2JhZjY2XkEyXkFqcGc@._V1_.jpg","1/1/2009","Sandbox game",0),
    new Article(2,"Deadlock","https://assets-prd.ignimgs.com/2024/08/29/deadlock-1724969546105.jpg","1/9/2024","MOBA SHOOTER game",0),
    new Article(3,"Road 86","https://upload.wikimedia.org/wikipedia/en/0/09/Road_96_cover.jpg","5/6/2023","Stroy mode game",0)
  ];
  constructor(){
    this.Articles.sort((a,b) => b.score - a.score);
    console.log(this.Articles);
  }
  showen = "";
  searched = "";
  showAddForm(){
    this.showen = "showen";
  }
  addArt(art : Article){
    this.Articles = [...this.Articles,art];
    console.log(art);
    this.showen = "";
  }
  addOne(art : Article,articles: Article[]){
    art.score +=1;
    articles.sort((a,b) => b.score - a.score);
  }
  minusOne(art : Article,articles: Article[]){
    if(art.score>0){
      art.score-=1;
      articles.sort((a,b) => b.score - a.score);
    }
  }
  searchItem(s : string){
    this.searched = s.toLowerCase();
  }
}
