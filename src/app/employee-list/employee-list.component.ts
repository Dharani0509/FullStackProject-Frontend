import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ChangeDetectorRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];


  constructor(private employeeService: EmployeeService,private router:Router,private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getEmployees();

}
private getEmployees(){
  this.employeeService.getEmployeesList().subscribe(data =>{
    this.employees = data;
    console.log('Employees updated:', this.employees);
      });
   
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);

  }
  // deleteEmployee(id: number){
  //   this.employeeService.deleteEmployee(id).subscribe(data =>{
  //     console.log(data);
  //     this.getEmployees();
  //   });
  // }

deleteEmployee(id: number): void {
  this.employeeService.deleteEmployee(id).subscribe(
    data => {
      console.log('Employee deleted successfully:', data);
      this.getEmployees(); // Update the employee list
      this.cd.detectChanges(); // Manually trigger change detection
    },
    (error: HttpErrorResponse) => {
      const httpError = error as HttpErrorResponse;
      if (httpError.status === 200) {
        console.log('Employee deleted successfully:', httpError.error.text);
        this.getEmployees(); // Update the employee list
      } else {
        console.error(
          `Backend returned code ${httpError.status}, ` +
          `body was: ${JSON.stringify(httpError.error)}`
        );
      }
    }
  );
}

employeeDetails(id: number){
  this.router.navigate(['employee-details',id]);
}



}
