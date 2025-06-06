import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent {
  // Employee form to hold informaiton
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: '',
  };

  // Submit function
  onSubmit(): void {
    console.log(this.employee);
  }
}
