import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IEmployee } from "../Models/employee.interface";

@Injectable()
export class EmployeeServices {
  dataUrl:string='api/employees'

  constructor(private _http:HttpClient){}

  getEmployeeList():Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(this.dataUrl);
  }

}