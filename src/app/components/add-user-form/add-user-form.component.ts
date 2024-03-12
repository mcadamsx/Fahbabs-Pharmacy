import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {AuthServiceService} from "../../services/auth-service.service";
import {Authinterface} from "../../interface/authinterface";

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent {
  constructor(private fb:FormBuilder, private authService: AuthServiceService) {
  }

  addUsers = this.fb.group({
    firstName: [""],
    lastName: [""],
    username: [""],
    password: [""],
    role: [""],

  });


postUsers(){
  const postData = {...this.addUsers.value}

  this.authService.postUsers(postData as Authinterface).subscribe((response)=>{
    console.log("sucess")
  })

}



}
