import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'

  };

  public canShowAge = true
  public showAge() {
    this.canShowAge = !this.canShowAge
  }



  public isVital: boolean = false

  public isListDisplayed: boolean = false


  public displayList() {
    this.isListDisplayed = !this.isListDisplayed

  }

  public vital() {
    this.isVital = !this.isVital
  }
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
}
