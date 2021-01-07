import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  data;

  constructor(public datasvc: DataService) {
  }

  ngOnInit() {
    this.datasvc.getData()
      .subscribe(result => {
        this.data = result;
      })
  }


  doDelete(item) {
    this.datasvc.doDelete(item).subscribe(result => {
      this.data = this.data.filter((v) => {
        return v.id !== item.id;
      });
    },
      error => {
        console.log(error);
      });

  }

  doModify(post: any) {
    this.datasvc.doModify(post).subscribe(
      result => {
        this.data = this.data.map((item) => {
          if (item.id === post.id) {
            return Object.assign({}, item, post);
          }
          return item;
        });
      },
      error => {
        console.log(error);
      });

  }

}
