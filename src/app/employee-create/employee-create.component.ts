import { Component, OnInit, Input } from '@angular/core';
import { EmployeeApiService } from '../employee-api.service';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  @Input() employeeDetails = { name: '', email: '', companyId: 0 }
  companies = [];
  dataEmployee = [];
  constructor(
    public restApi: EmployeeApiService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.restApi.getCompanies().subscribe((data: any) => {
      this.companies.push(data.companies);
    })
  }

  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employee'])
    })
  }

}
