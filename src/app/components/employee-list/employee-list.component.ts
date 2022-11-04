import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private apiService:ApiserviceService) { }
  readData:any;
  successMsg:any;
  
  // retrive data
  ngOnInit(): void {
    this.getDbData();
  }

  getDbData(){
    this.apiService.getEmployees().subscribe(result=>{
      this.readData = result;
      // console.warn(result);
      });
  }

  // getdeleteid
  deleteId(id:any){
    this.apiService.deleteData(id).subscribe((res)=>{
      this.successMsg = res.message;
      this.getDbData();
    })
  }


}
