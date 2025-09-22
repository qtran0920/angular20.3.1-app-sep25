import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  //@Input({required: true}) avatar!: string; // ! is to inform ts that value is to be assigned
  //@Input({required: true}) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {

  }
}
