import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!:FormGroup;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this._formBuilder.group({
      firstName:['',[Validators.required]],
      middleName:[''],
      lastName:['',[Validators.required]],
      emailId:['', [Validators.required, Validators.email]],
      employeeType: ['', [Validators.required]],
      contactNumber:[,[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      gender:['',[Validators.required]],
      dateOfBirth:['', [Validators.required]],
      address: ['', [Validators.required]],
      pincode: [,[Validators.required, Validators.min(100000), Validators.max(999999)]]
    })
  }


  submit(){
    console.log(this.employeeForm)
  }
}
