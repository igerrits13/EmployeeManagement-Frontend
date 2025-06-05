import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

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
}
