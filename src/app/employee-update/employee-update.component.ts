import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeApiService } from '../employee-api.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employeeData: any = {};
  companies = [];
  constructor(
    public restApi: EmployeeApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.restApi.getEmployee(this.id).subscribe((data: any) => {
      this.employeeData = data.employee;
      this.companies.push(data.companies);
      console.log(data.companies);
    })
  }
  // Update employee data
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateEmployee(this.id, this.employeeData).subscribe(data => {
        console.log('Update Data:'+this.employeeData.companyId);
        this.router.navigate(['/employee'])
      })
    }
  }

}
