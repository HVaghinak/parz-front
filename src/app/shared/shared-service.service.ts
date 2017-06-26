import { Injectable } from '@angular/core';

@Injectable()
export class SharedServiceService {
  user: any;
  constructor() { }
  setUser(user) {
    this.user = user;
  }
}
