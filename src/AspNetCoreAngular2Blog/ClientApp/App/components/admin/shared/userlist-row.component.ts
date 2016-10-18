import { Component, OnInit, Input } from '@angular/core';
import {IUser,IUserProfile} from '../../../models/user.model';
@Component({
  selector: 'userlist-row',
  template: require('./userlist-row.component.html'),
  styles: [require('./userlist-row.component.css')]
})
export class UserlistRowComponent implements OnInit {
  @Input() user : IUser;
  constructor() { }

  ngOnInit() {
  }

}
