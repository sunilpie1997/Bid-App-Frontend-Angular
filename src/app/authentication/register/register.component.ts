import { Component, OnInit } from '@angular/core';
import { User } from '@app/classes/user';
import { Profile } from '@app/classes/profile';
import { RegisterService } from '@app/services/register.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '@app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [``]
})
export class RegisterComponent implements OnInit {
//store registered user
  user:User;

  constructor(private authService:AuthService,private registerService:RegisterService,private router:Router,private route:ActivatedRoute) {
   }

  ngOnInit(): void {
//initialising with default null values-->see constructor of user 
    this.user=new User(new Profile());
                 
    
  }

onSubmit(){
  this.registerService.registerUser(this.user).subscribe(resp=>
  {console.log(resp.status)
    if(resp.status==201){
      //if user is created
      alert("you have registered successfully");
  this.router.navigate(['../login',],{relativeTo:this.route});}
  },
  error=>{console.log(error);
   alert(error)});
}
}