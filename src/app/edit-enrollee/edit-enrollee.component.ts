import { Enrollee } from '../model/enrollee';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { EnrolleesService } from '../services/enrollees.service';

@Component({
  selector: 'app-edit-enrollee',
  templateUrl: './edit-enrollee.component.html',
  styleUrls: ['./edit-enrollee.component.css']
})
export class EditEnrolleeComponent implements OnInit, OnDestroy  {

  public enrolleeForm = this.formBuilder.group({
    id: [{ value: '', disabled: true}],
    name: [''],
    active: [''],
    dateOfBirth: [{ value: '', disabled: true}]
  });

  private enrollmentId: string;
  public message: string;
  private routeSub;
  private getEnrolleesByIdSub;
  private putEnrolleesSub;


constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private enrolleeService: EnrolleesService
  ) { }

ngOnInit(): void {
    this.routeSub = this.route.params
        .subscribe(param => {
          console.log(param.id);
          this.enrollmentId = param.id;
          this.loadEnrollee(param.id);

        });
  }

private loadEnrollee(id: string): void {
  this.getEnrolleesByIdSub = this.enrolleeService.getEnrolleesById(id)
  .subscribe((data: Enrollee) => {
    this.enrolleeForm.patchValue({
      id : data.id,
      name: data.name,
      active : data.active,
      dateOfBirth : data.dateOfBirth
  });
  },
  error => {
    console.log(error);
  });
}

public onSubmit(data: Enrollee): void {
    console.log(data);
    this.putEnrolleesSub = this.enrolleeService.putEnrollees(this.enrollmentId, data)
    .subscribe(val => {
      console.log('data updated successfully');
      this.message = 'success';
    },
    error => {
      console.log(error);
      this.message = 'failed';
    });
  }

public goToHome(): void {
  this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.putEnrolleesSub.unsubscribe();
    this.getEnrolleesByIdSub.unsubscribe();
    this.routeSub.unsubscribe();
    console.log('subscriptions destroyed..[EditEnrolleeComponent]');
}

}
