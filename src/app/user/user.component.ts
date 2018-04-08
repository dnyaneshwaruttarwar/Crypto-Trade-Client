import { Component, OnInit } from '@angular/core';
import { NotificationUtil } from '../util/notification';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        NotificationUtil.success('yes');
    }

}
