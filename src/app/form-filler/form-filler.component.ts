import { Component } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { Profile } from './form.model';

@Component({
  selector: 'app-form-filler',
  templateUrl: './form-filler.component.html',
  styleUrls: ['./form-filler.component.css']
})
export class FormFillerComponent {
  userForm:Profile = new Profile();
  userInfoList:Profile[] = [];
  onBtnClick(){
    this.userInfoList.push(this.userForm)
    this.userForm = new Profile();
  }
  onBtnDelete(index:any){
    this.userInfoList.splice(index,1)
  }}
