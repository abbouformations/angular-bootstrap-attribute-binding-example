import { Component } from '@angular/core';
import { EmployeeVo } from '../employee-vo';
import { DataService } from '../data.service';

@Component({
  selector: 'info',
  templateUrl: './e-info.component.html',
  styleUrl: './e-info.component.css',
})
export class EInfoComponent {
  employees: EmployeeVo[] = [];
  constructor(private service: DataService) {
    this.employees = this.service.getData();
  }
  add(frm: any): EmployeeVo[] {
    console.log('id=', frm.value.firstname);
    this.employees = this.service.add(
      new EmployeeVo(frm.value.id, frm.value.firstname, frm.value.lastname)
    );
    return this.employees;
  }
  getData(): EmployeeVo[] {
    return this.service.getData();
  }
}
