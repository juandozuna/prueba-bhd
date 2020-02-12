import { Injectable } from '@angular/core';
import {CommentModel } from '../models/comment';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CommentService {
  private baseUrl = 'https://simple-api.herokuapp.com/api/v1';
  constructor(
    private http: HttpClient
  ) { }

  async getComments(): Promise<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${this.baseUrl}/comments`).toPromise();
  }
}