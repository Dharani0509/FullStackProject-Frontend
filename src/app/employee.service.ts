import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee} from './employee'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL ='http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) { }

   getEmployeesList(): Observable<Employee[]> {
     return this.httpClient.get<Employee[]>(`http://localhost:8080/api/v1/employees`);
   }
  
//  getEmployeesList(): Observable<Employee[]> {
//    // Replace with actual API call
//     return of([
//       { id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com' },
//       {"id":2,"firstName":"Jane","lastName":"Smith","emailId":"jane.smith@example.com"}
//       // Add more mock data
      
//     ]);
//   }
    

createEmployee(employee: Employee): Observable<Object>{
  return this.httpClient.post(`http://localhost:8080/api/v1/addEmployee`, employee);
}

getEmployeeById(id: number):Observable<Employee>{
  return this.httpClient.get<Employee>(`http://localhost:8080/api/v1/employees/${id}`)
}
    
updateEmployee(id: number,employee:Employee) :Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`,employee);
  }

  //  deleteEmployee(id: number) :Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/deleteEmployee/${id}`);
  //  }
   deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/deleteEmployee/${id}`);
  }
  
}


