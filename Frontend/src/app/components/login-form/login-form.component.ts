import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthServiceService} from "../../services/auth-service.service";


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginForm = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]]
  });

  constructor(private router:Router, private fb: FormBuilder, private authService:AuthServiceService) {}

  loginUser(){
    const{ username,password} = this.loginForm.value;

    this.authService.getUserByEmail(username as string).subscribe((response)=>{
      let list = response;
      if(list.length > 0 && list[0].username === username && list[0].role === "admin" && list[0].password === password){
        this.router.navigate(["dashboard"]);
      }
      if(list.length > 0 && list[0].username === username && list[0].role === "dispenser"&& list[0].password === password ){
        this.router.navigate(["dispenser"]);
      }
      else{
        console.error("not found")
      }
      })
    }
  }


