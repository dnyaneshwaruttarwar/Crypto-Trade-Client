import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TypeaheadModule } from 'ngx-bootstrap';

import { environment } from './../environments/environment';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { CoinComponent } from './coin/coin.component';
import { TradeComponent } from './trade/trade.component';
import { SharedService } from './shared/service/shared.service';
import { TradeService } from './trade/trade.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ExchangeComponent,
    CoinComponent,
    TradeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NavbarModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    TypeaheadModule.forRoot()
  ],
  providers: [
    SharedService,
    TradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
