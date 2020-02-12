import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  private buildForm() {
    this.commentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(35), Validators.pattern("/[^A-Za-z0-9]+/g")]],
      email: ['', [Validators.required, Validators.email]],
      website: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.maxLength(100)]]
    })
  }

  openCreateMode(){
    this.buildForm();
  }

  ngOnInit() {
    //this.buildForm()
  }

}