import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { CoinComponent } from './coin/coin.component';
import { TradeComponent } from './trade/trade.component';

const routes: Routes = [
    { path: 'exchange', component: ExchangeComponent },
    { path: 'coin', component: CoinComponent },
    { path: 'trade', component: TradeComponent },
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: 'user', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
