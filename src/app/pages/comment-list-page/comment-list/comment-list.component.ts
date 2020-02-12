import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import {CommentModel} from '../../../models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: CommentModel;
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.getDataRequest().catch(err => {
      console.log(err);
    });
  }

  private async getDataRequest() { 
    const data = await this.commentService.getComments();
    console.log(data, 'COMMENTS');
  }


}