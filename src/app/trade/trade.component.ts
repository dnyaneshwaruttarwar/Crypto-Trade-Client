import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Exchange } from '../shared/model/exchange.model';
import { TradeService } from './trade.service';

@Component({
    selector: 'app-trade',
    templateUrl: './trade.component.html',
    styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

    public exchangeList: Array<Exchange>;
    public order: any;
    public selectedExchangeCoins: Array<string>;
    public selectedFireaseCoins: any;
    
    constructor(private db: AngularFireDatabase,
                private tradeService: TradeService) {

        this.exchangeList = [];
        this.order = {};
        this.selectedExchangeCoins = [];
    }

    public ngOnInit() {
        this.db.list('exchange').valueChanges()
            .subscribe((data: any) => {
                this.exchangeList = data;
                for (let i = 0; i < this.exchangeList.length; i++) {
                    const exchange = this.exchangeList[i];
                    this.exchangeList[i].coinPairList = [];
                    this.exchangeList[i].coinPairList = Object.keys(exchange.coins);
                    let coins = exchange.coins;
                    let coinList = [];
                    // for (const key in coins) {
                    //     coinList.push(coins[key]);
                    // }
                    // this.exchangeList[i].coins = coinList;

                    this.exchangeList[i].coins = exchange.coins;
                }
            });
    }

    public onSelectExchange() {
        for (let i = 0; i < this.exchangeList.length; i++) {
            const exchange = this.exchangeList[i];
            if (this.order.exchange === exchange.name) {
                this.selectedExchangeCoins = exchange.coinPairList;
                this.selectedFireaseCoins = exchange.coins;
                break;
            }
        }
    }

    public onSelectBuyCoin(): void {
        console.log("Buy Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());

        if (this.order.exchange === 'binance') {
            this.order.stepSize = this.selectedFireaseCoins[this.order.buyCoin].stepSize;
        }

        this.tradeService.buyAndSellOrder(this.order)
            .subscribe((data) => {
                console.log("Buy Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                console.log(data);
            }, (error) => {
                console.error(error);
            });
    }

    public onSelectSellCoin(): void {
        
    }

}
