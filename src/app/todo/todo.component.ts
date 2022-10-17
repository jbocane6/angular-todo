import { Component, OnInit } from '@angular/core';
import { remult } from 'remult';
import { Task } from '../../shared/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  taskRepo = remult.repo(Task);
  tasks: Task[] = [];

  ngOnInit() {
    this.fetchTasks();
  }

  async fetchTasks() {
    this.tasks = await this.taskRepo.find();
  }


}
