import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-api.service';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  // id = this.actRoute.snapshot.params['id'];
  public id : string;
  employeeData: any = [];
  constructor(
    public restApi: EmployeeApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
      this.id = this.actRoute.snapshot.paramMap.get('id');
      console.log('ID: '+this.id);
      this.employeeDetails();
    })
  }

  employeeDetails(){
    this.restApi.getEmployeeDetails(this.id)
      .subscribe((data:any) => {
        this.employeeData = data.employee;
        console.log(data.employee);
      },error=>{console.error(error)})
  }

}
