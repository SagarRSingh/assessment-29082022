import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class DataServices implements InMemoryDbService{
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    return{
      employees:[
        {id: 1, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'male', dateOfBirth:'29/08/2000', employeeType:'contract', address:'some random address of this employee', pincode: 677893},
        {id: 2, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'female', dateOfBirth:'29/08/2000', employeeType:'permanent', address:'some random address of this employee', pincode: 677893},
        {id: 3, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'male', dateOfBirth:'29/08/2000', employeeType:'permanent', address:'some random address of this employee', pincode: 677893},
        {id: 4, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'female', dateOfBirth:'29/08/2000', employeeType:'contract', address:'some random address of this employee', pincode: 677893},
        {id: 5, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'male', dateOfBirth:'29/08/2000', employeeType:'contract', address:'some random address of this employee', pincode: 677893},
        {id: 6, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'male', dateOfBirth:'29/08/2000', employeeType:'contract', address:'some random address of this employee', pincode: 677893},
        {id: 7, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'female', dateOfBirth:'29/08/2000', employeeType:'permanent', address:'some random address of this employee', pincode: 677893},
        {id: 8, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'male', dateOfBirth:'29/08/2000', employeeType:'permanent', address:'some random address of this employee', pincode: 677893},
        {id: 9, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'female', dateOfBirth:'29/08/2000', employeeType:'contract', address:'some random address of this employee', pincode: 677893},
        {id: 10, firstName:'Ram', middleName:'Kumar', lastName:'Jadeja', emailId:'ram@some.com', contactNumber: 9011293393, gender:'male', dateOfBirth:'29/08/2000', employeeType:'contract', address:'some random address of this employee', pincode: 677893},
      ]
    }
  }
}