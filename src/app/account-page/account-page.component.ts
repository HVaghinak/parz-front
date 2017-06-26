import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { SharedServiceService } from '../shared/shared-service.service';
@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css'],
})
export class AccountPageComponent implements OnInit {
  tasker: any;
  acceptance: any;
  token:any;
  constructor(private restAngular: Restangular, private globalShared: SharedServiceService) { }

  ngOnInit() {
    /*this.tasker = this.restAngular.all('acceptance/');
    this.tasker.getList().subscribe(res => this.acceptance = res);*/
    this.token = this.restAngular.all('api-token-auth/');
    this.token.post({username: 'parz', password: 'pass1234'}).subscribe(
      res => this.globalShared.setUser(res));
  }

}
