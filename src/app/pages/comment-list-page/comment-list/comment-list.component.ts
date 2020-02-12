import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import {CommentModel} from '../../../models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: CommentModel[] = [];
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

  getWebsiteValue(val: string) {
    if (val === null || val === undefined) {
      return "N/A";
    }
    return val;
  }


  private async getDataRequest() { 
    const data = await this.commentService.getComments();
    this.comments = data;
    console.log(data, 'COMMENTS');
  }


}