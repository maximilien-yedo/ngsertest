import { NgModule } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './connexion/login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ProfilComponent } from './profil/profil.component';
import { GestionWalletComponent } from './gestion-wallet/gestion-wallet.component';
import { CashinComponent } from './cashin/cashin.component';
import { CashoutComponent } from './cashout/cashout.component';

export const ROUTES : Routes = [
  { path:'home',component:HomeComponent},
  { path:'wallet',component:GestionWalletComponent},
  { path:'profil',component:ProfilComponent},
  { path:'login',component:LoginComponent},
  { path:'cashin',component:CashinComponent},
  { path:'cashout',component:CashoutComponent},
  { path:'',component:LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfilComponent,
    GestionWalletComponent,
    CashinComponent,
    CashoutComponent,
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
