import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { SharedService } from './shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public items: Array<any>;

    constructor(public location: Location,
                private sharedService: SharedService,
                private db: AngularFireDatabase) {}

    public ngOnInit() {
      this.db.list('exchange').valueChanges()
          .subscribe((data) => {
              this.items = data;
          });
    }

    public isMap(path) {
        let title = this.location.prepareExternalUrl(this.location.path());
        title = title.slice( 1 );
        if (path === title) {
            return false;
        } else {
            return true;
        }
    }
}
