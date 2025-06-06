import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
  // Employee form to hold informaiton
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: '',
  };

  isEditing: boolean = false;
  errorMessage: string = '';

  // Initialize the employee service
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((result) => {
      const id = result.get('id');
      // ID parameter only exists if in edit mode, then get the current employee and update form information
      if (id) {
        this.isEditing = true;
        this.employeeService.getEmployeeById(Number(id)).subscribe({
          next: (result) => (this.employee = result),
          error: (err) => (this.errorMessage = `Error (${err.status})`),
        });
      }
    });
  }

  // Submit function
  onSubmit(): void {
    if (this.isEditing) {
      // Edit an existing employee via the employee service
      this.employeeService.editEmployee(this.employee).subscribe({
        // If successful, route to home page
        next: () => {
          this.router.navigate(['/']);
        },
        // otherwise, display the error
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error during editing (${err.status})`;
        },
      });
    } else {
      // Create a new employee via the employee service
      this.employeeService.createEmployee(this.employee).subscribe({
        // If successful, route to home page
        next: () => {
          this.router.navigate(['/']);
        },
        // otherwise, display the error
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error during creating (${err.status})`;
        },
      });
    }
  }
}
