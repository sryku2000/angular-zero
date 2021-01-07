import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnDestroy, OnChanges {

  @Input() item;
  orig_item;
  @Output() delete = new EventEmitter<any>();
  @Output() titleChanged = new EventEmitter<any>();

  onEditing = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item) {
      this.item = Object.assign({}, changes.item.currentValue);
      this.orig_item = changes.item.currentValue;
    }
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

  cancelEdit() {
    this.onEditing = false;
    this.item = Object.assign({}, this.orig_item);
  }

  doEdit(title: string) {
    this.titleChanged.emit(this.item);
  }

}
