
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrolleesService } from '../services/enrollees.service';

@Component({
  selector: 'app-enrollees-list',
  templateUrl: './enrollees-list.component.html',
  styleUrls: ['./enrollees-list.component.css']
})
export class EnrolleesListComponent implements OnInit, OnDestroy  {

  public enrolleesList;
  public error = false;
  private listSubscription;

  constructor(
    private router: Router,
    private enrolleeService: EnrolleesService
  ) { }

  ngOnInit(): void {
    this.listSubscription = this.enrolleeService.getEnrollees()
    .subscribe(enrolleesList => {
      this.enrolleesList = enrolleesList;
      this.error = false;
    },
    error => {
      console.log(error);
      this.error = true;
    });
  }

  public navigateToEditEnrollee(id: string): void{
    console.log(id);
    this.router.navigate(['/enrollee/' + id]);
  }

  ngOnDestroy(): void {
    this.listSubscription.unsubscribe();
    console.log('subscription destroyed..[EnrolleesListComponent]');
}

}
