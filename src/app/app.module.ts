import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './containers/view/view.component';
import { CardComponent } from './components/card/card.component';
import { AddressComponent } from './components/address/address.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { TxHashLinkComponent } from './components/tx-hash-link/tx-hash-link.component';
import { TypeBlockComponent } from './components/type-block/type-block.component';
import { BlockLinkComponent } from './components/block-link/block-link.component';
import { FeeBlockComponent } from './components/fee-block/fee-block.component';
import { TimeStampBlockComponent } from './components/time-stamp-block/time-stamp-block.component';
import { AccountNotFoundComponent } from './components/account-not-found/account-not-found.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    CardComponent,
    AddressComponent,
    TransactionsComponent,
    TxHashLinkComponent,
    TypeBlockComponent,
    BlockLinkComponent,
    FeeBlockComponent,
    TimeStampBlockComponent,
    AccountNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
