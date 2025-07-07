import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: string[] = [];

  addTask() {
    const newTask = prompt('Enter new task:');
    if (newTask) {
      this.tasks.push(newTask);
    }
  }

  deleteTask(index: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tasks.splice(index, 1);
    }
  }
}
