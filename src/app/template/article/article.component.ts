import { Component, Input } from '@angular/core';
import { Article } from '../../article';

@Component({
  selector: '[app-article]',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input()
  article: Article = new Article('', '');
}
