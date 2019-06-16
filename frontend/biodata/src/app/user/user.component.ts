import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [''];
  updatedUser: any;
  deletedUser: any;
  createdUser: any;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => this.users = data
    );
  }

  userForm = this.fb.group({
    uid: [''],
    name: [''],
    email: [''],
    mobileNumber: [''],
    jobTitle: ['']
  });
  createUserForm = this.fb.group({
    uid: [''],
    name: [''],
    email: [''],
    mobileNumber: [''],
    jobTitle: ['']
  });

  update(uid, name, email, mobileNumber, jobTitle) {
    let userJson = JSON.stringify({
      uid: uid,
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      jobTitle: jobTitle
    });
    console.log(userJson)
    this.userService.update(userJson).subscribe(
      data => this.updatedUser = data
    );
    window.location.reload();
  }
  delete(uid) {
    if (confirm("Are you sure ?")) {
      this.userService.deleteUser(uid).subscribe(
        data => this.deletedUser = data
      );
    }
    window.location.reload();
  }

  createUser() {
    this.userService.saveUser(this.createUserForm.value).subscribe(
      data => this.createdUser = data
    );
    window.location.reload();
  }

}
