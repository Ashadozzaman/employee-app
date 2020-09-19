import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  Employee: any = [];
  constructor(
    public employeeApi:EmployeeApiService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees(){
    return this.employeeApi.getEmployees()
      .subscribe((data:any)=>{
        this.Employee.push(data.employees);
        console.log(data.employees);
      })
  }

  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.employeeApi.deleteEmployee(id).subscribe(data => {
        this.getAllEmployees();
        // this.router.navigate(['employee'])
      })
    }
  }  

}
