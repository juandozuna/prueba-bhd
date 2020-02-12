import { Component, OnInit, ViewChild } from '@angular/core';
import {CommentFormComponent} from '../../components/comment-form/comment-form.component';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @ViewChild(CommentFormComponent) commentFormComponent: CommentFormComponent;

  constructor() { }

  ngOnInit() {
    this.commentFormComponent.openCreateMode();
  }

  submitted(event) {
    console.log(event);
  }

}