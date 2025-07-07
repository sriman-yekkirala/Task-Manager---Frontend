import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';

// export const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Root redirects to /login
//   { path: 'login', component: LoginComponent },
//   { path: '**', redirectTo: '/login' } // Wildcard fallback
// ];

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tasks', component: TasksComponent }
];