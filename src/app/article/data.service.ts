import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get('http://localhost:4200/api/articles.json');
  }

  run() {
    console.log("data service");
  }


  doDelete(item) {
    return this.http.delete('http://localhost:4200/api/articles/' + item.id);
  }

  doModify(post: any) {
    return this.http.put('http://localhost:4200/api/articles/' + post.id, post);
  }

}
