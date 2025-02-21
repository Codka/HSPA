import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUser(user: User){
  let users=[];
  //check if local storage has users
  if(localStorage.getItem('Users')){
    //get existing users from local storage
    users=JSON.parse(localStorage.getItem('Users'));
    // Add the new user to the beginning of the users array
    users=[...users,user];
  }
  else{
    users=[user];
  }
  //save users 
  localStorage.setItem('Users',JSON.stringify(users));
}
}
