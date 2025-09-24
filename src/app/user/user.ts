import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string; // ! is to inform ts that value is to be assigned
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
