import { Component, OnInit, ViewChild } from '@angular/core';
import {CommentFormComponent} from '../../components/comment-form/comment-form.component';
import {CommentService} from '../../services/comment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @ViewChild(CommentFormComponent) commentFormComponent: CommentFormComponent;

  constructor(
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.commentFormComponent.openCreateMode();
  }

  submitted(event) {  
    console.clear();
    console.log(event);
    this.commentService.createComment(event).then(() => {
      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err, 'Ha ocurrido un error');
    })
  }

}