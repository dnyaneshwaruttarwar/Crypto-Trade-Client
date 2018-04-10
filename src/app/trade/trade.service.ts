import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from './../shared/constant/apiUrl';

@Injectable()
export class TradeService {

	constructor(private httpClient: HttpClient) {

	}

	public getLastSellOrders(exchange: string, buyCoinPair: string) {
		return this.httpClient.get<any>(API_URL.WEBSERVICE_URL + API_URL.GET_SELL_ORDER);
	}

	public buyAndSellOrder(order: any) {
		return this.httpClient.post<any>(API_URL.WEBSERVICE_URL + API_URL.BUY_AND_SELL_ORDER, order);
	}

	public getTimerValue() {
		return this.httpClient.get<any>(API_URL.WEBSERVICE_URL + '/timestamp');
	}


}