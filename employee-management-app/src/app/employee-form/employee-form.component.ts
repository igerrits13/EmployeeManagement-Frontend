import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  errorMessage: string = '';

  // Initialize the employee service
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  // Submit function
  onSubmit(): void {
    // Create a new employee via the employee service
    this.employeeService.createEmployee(this.employee).subscribe({
      // If successful, route to home page
      next: () => {
        this.router.navigate(['/']);
      },
      // otherwise, display the error
      error: (err) => {
        console.error(err);
        this.errorMessage = `Error (${err.status})`;
      },
    });
  }
}
