import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/services/user.service';
import {AlertifyService} from 'src/app/services/alertify.service'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  //create form variable
  registerationForm: FormGroup;
  //this to store registerationForm.value
  user: User;
  //this variable for validation
  userSubmited:boolean;

  constructor(private fb:FormBuilder, 
              private userService:UserService,
              private alertify:AlertifyService) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //     userName : new FormControl(null,Validators.required),
    //     email : new FormControl(null,[Validators.required,Validators.email]),
    //     password : new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //     confirmPassword : new FormControl(null,[Validators.required]),
    //     mobile : new FormControl(null,[Validators.required,Validators.minLength(10)])
    //   },this.passwordMatchingValidator);

    //-----------this is more simplified----------------
    this.createRegisterationForm();
  }
  //create registeration form
  createRegisterationForm(){
    this.registerationForm = this.fb.group({
      userName : [null,Validators.required],
      email : [null,[Validators.required,Validators.email]],
      password : [null,[Validators.required,Validators.minLength(4)]],
      confirmPassword : [null,[Validators.required]],
      mobile : [null,[Validators.required,Validators.minLength(10)]]
    },{validators:this.passwordMatchingValidator});
  }
  //custom validation for password
  passwordMatchingValidator(fg:FormGroup) : Validators{
    return fg.get('password').value===fg.get('confirmPassword').value ? null : {notmatched:true}
  }

  //instead of useing registerationForm.get('userName') and etc in our html code
  //we can declare getters for all our controls
  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registerationForm.value);
    this.userSubmited=true;
    //validate the form before saving data
    if(this.registerationForm.valid)
    {
      //this.user=Object.assign(this.user,this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmited=false;
      this.alertify.success('Congrats, you are successfully registered')
    }
    else{
      this.registerationForm.markAllAsTouched();
      this.alertify.error('Kindly provide the required fields');
      
    }

  }
  userData() : User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
}
