import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
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
    uid: ['',Validators.required],
    name: ['',Validators.required],
    email: ['',Validators.required],
    mobileNumber: ['',Validators.required],
    jobTitle: ['',Validators.required]
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
    if(this.createUserForm.value != null ){
      this.userService.saveUser(this.createUserForm.value).subscribe(
        data => this.createdUser = data
      );
    }else{
      alert("User cannot be created,Form must be filled completely")
    }
        window.location.reload();
  }

}
