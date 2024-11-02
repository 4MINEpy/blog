import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  @Input() lastId = 0;
  @Output() artCreated = new EventEmitter<Article>();
  today = new Date();
  day = String(this.today.getDate());
  month = String(this.today.getMonth() + 1);
  year = this.today.getFullYear();

 formattedDate = this.day+"/"+this.month+"/"+this.year;
  addArt(title : string, link : string,desc : string){
    const newArt = new Article(this.lastId+1,title,link,this.formattedDate,desc,0);
    this.artCreated.emit(newArt);
  }

}
