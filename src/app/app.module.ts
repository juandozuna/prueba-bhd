import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommentListPageComponent } from "./pages/comment-list-page/comment-list-page.component";
import { CommentListComponent } from "./pages/comment-list-page/comment-list/comment-list.component";
import { CommentService } from "./services/comment.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CommentListPageComponent,
    CommentListComponent
  ],
  bootstrap: [AppComponent],
  providers: [CommentService]
})
export class AppModule {}
