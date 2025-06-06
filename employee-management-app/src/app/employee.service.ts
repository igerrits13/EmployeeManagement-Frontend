import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // Store the api url for employees using the environment variable
  private apiUrl = `${environment.apiUrl}/employee`;

  constructor(private htttp: HttpClient) {}

  // Get the list of employees from the api
  getEmployees(): Observable<Employee[]> {
    return this.htttp.get<Employee[]>(this.apiUrl);
  }

  // Get a single employee by id
  getEmployeeById(id: number): Observable<Employee> {
    return this.htttp.get<Employee>(`${this.apiUrl}/${id}`);
  }

  // Create a new employee
  createEmployee(employee: Employee): Observable<Employee> {
    return this.htttp.post<Employee>(this.apiUrl, employee);
  }

  // Update a employee by employee
  editEmployee(employee: Employee): Observable<Employee> {
    return this.htttp.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
  }

  // Delete a employee by id
  deleteEmployee(id: number): Observable<void> {
    return this.htttp.delete<void>(`${this.apiUrl}/${id}`);
  }
}
