import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { EmpInterface } from '../models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  @ViewChild('aadharFile') aadharFile:any;

  educationOptions = [
    '10th pass',
    'diploma',
    'graduate',
    'post-graduate',
    'PhD'
  ];
  designationOptions = [
    'full-stack ',
    'Team head',
    'front-end',
    'backend',
    'junior'
  ];

  userForm:FormGroup;
  EmpDetails:EmpInterface[];
  
// navigate to different page
  router: any;

  constructor(private apiService:ApiserviceService, private fb:FormBuilder) { 
    this.userForm = fb.group({});
    this.EmpDetails=[];
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullname: this.fb.control(''),
      birthday: this.fb.control(''),
      phone: this.fb.control(''),
      gender: this.fb.control(''),
      eMail: this.fb.control(''),
      education: this.fb.control('default'),
      designation: this.fb.control('default'),
      salary: this.fb.control(''),
      aadhar: this.fb.control('')
    });
    this.apiService.getEmployees().subscribe(res=>{
      // console.log(res);
    })
  }

  userSubmit(){
    let submitDetail: EmpInterface={
      fullname: this.FullName.value,
      birthday: this.Birthday.value,
      gender: this.Gender.value,
      phone: this.Phone.value,
      eMail: this.Email.value,
      education: this.educationOptions[parseInt(this.Education.value)],
      designation: this.designationOptions[parseInt(this.Designation.value)],
      salary: this.Salary.value,
      aadhar: this.aadharFile.nativeElement.files[0]?.name,
    }
    this.apiService.postEmployees(submitDetail).subscribe((res)=>{
      this.EmpDetails.unshift(res);
      this.clearForm();
      alert("Successfully created");
      this.router.navigate(['/add-employee']);
    },err=>{
      alert("Please try once again");
      this.userForm.reset();
    })
  }

  clearForm(){
    this.FullName.setValue('');
    this.Birthday.setValue('');
    this.Gender.setValue('');
    this.Phone.setValue('');
    this.Email.setValue('');
    this.Education.setValue('');
    this.Designation.setValue('');
    this.Salary.setValue('');
    this.aadharFile.nativeElement.value='';
  }

  public get FullName():FormControl{
    return this.userForm.get('fullname') as FormControl;
  }
  public get Birthday():FormControl{
    return this.userForm.get('birthday') as FormControl;
  }
  public get Phone():FormControl{
    return this.userForm.get('phone') as FormControl;
  }
  public get Email():FormControl{
    return this.userForm.get('eMail') as FormControl;
  }
  public get Education():FormControl{
    return this.userForm.get('education') as FormControl;
  }
  public get Designation():FormControl{
    return this.userForm.get('designation') as FormControl;
  }
  public get Salary():FormControl{
    return this.userForm.get('salary') as FormControl;
  }
  public get Gender():FormControl{
    return this.userForm.get('gender') as FormControl;
  }



}
