import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentListPageComponent} from './pages/comment-list-page/comment-list-page.component';
import {AddCommentComponent} from './pages/add-comment/add-comment.component';

const routes: Routes = [
  {
    path: '', 
    component: CommentListPageComponent, 
    data: {title: "LISTADO DE COMENTARIOS"}
  },
  {
    path: 'add',
    component: AddCommentComponent,
    data: {title: "CREACION DE COMENTARIOS"}
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }