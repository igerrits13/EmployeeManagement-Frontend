import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';

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

  // Initialize the employee service
  constructor(private employeeService: EmployeeService) {}

  // Submit function
  onSubmit(): void {
    // Create a new employee via the employee service
    this.employeeService
      .createEmployee(this.employee)
      .subscribe((result) => console.log(result));
  }
}
