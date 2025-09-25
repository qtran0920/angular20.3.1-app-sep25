import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from "./header/header";
import { User } from "./user/user";
import { TasksComponent } from "./tasks/tasks.component";

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20.3.1-sept25');

  users = DUMMY_USERS;
  selectedUserId = 'u1';

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

}
