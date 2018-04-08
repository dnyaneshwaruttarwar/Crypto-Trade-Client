import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SharedService {

	constructor(private db: AngularFireDatabase) {

	}

	public getExchnageList() {
		return this.db.list('exchange').valueChanges();
	}
}