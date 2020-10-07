import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostsComponent } from '../modules/posts/posts.component';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements OnInit {

  isPopupOpened = true;

  constructor(
    private dialog?: MatDialog,
    private _postsService?: PostsService
  ) { }

  ngOnInit() {
  }

  get PostsList() {
    return this._postsService.getAllPosts();
  }

  addPosts() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(PostsComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  editPosts(id: number) {
    this.isPopupOpened = true;
    const posts = this._postsService.getAllPosts().find(p => p.ID === id);
    const dialogRef = this.dialog.open(PostsComponent, {
      data: posts
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deletePosts(id: number) {
    this._postsService.deletePosts(id);
  }
  }
