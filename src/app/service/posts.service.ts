import { Injectable } from '@angular/core';
import { Posts } from '../model/posts';
import { PeriodicElement } from '../modules/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getPosts() {
    throw new Error('Method not implemented.');
  }

  _postsList: Posts[] = [];

  constructor() { }

  addPosts(posts: Posts) {
    posts.ID = this._postsList.length + 1;
    this._postsList.push(posts);
  }

  editPosts(posts: Posts) {
    const index = this._postsList.findIndex(c => c.ID === posts.ID);
    this._postsList[index] = posts;
  }

  deletePosts(id: number) {
    const posts = this._postsList.findIndex(c => c.ID === id);
    this._postsList.splice(posts, 1);
  }

  getAllPosts() {
    return this._postsList;
  }
}
