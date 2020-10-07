import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  public _postsForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<PostsComponent>,
  private _postsService: PostsService,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    this._postsForm = this._formBuilder.group({
      ID: [this.data.ID],
      FirstName: [ this.data.FirstName, [Validators.required]],
      LastName: [ this.data.LastName, [Validators.required]],
      Contact: [ this.data.Contact, [Validators.required]],
      Email: [ this.data.Email , [Validators.required]],
    });
  }

  onSubmit() {
    if (isNaN(this.data.ID)) {
      this._postsService.addPosts(this._postsForm.value);
      this.dialogRef.close();
    } else {
      this._postsService.editPosts(this._postsForm.value);
      this.dialogRef.close();
    }
  }
}