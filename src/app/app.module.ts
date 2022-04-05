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
import { CashinComponent } from './gestion-wallet/cashin/cashin.component';
import { CashoutComponent } from './gestion-wallet/cashout/cashout.component';
import { GestionCreditComponent } from './gestion-credit/gestion-credit.component';
import { Ng2GoogleChartsModule} from 'ng2-google-charts';
import { GoogleChartsModule } from 'angular-google-charts';
import { DemandePretComponent } from './gestion-credit/demande-pret/demande-pret.component';
import { DetailComponent } from './gestion-credit/detail/detail.component';
import { DemandeficheComponent } from './gestion-credit/demandefiche/demandefiche.component';
import { DemandefinComponent } from './gestion-credit/demandefin/demandefin.component';
import { SouscriptionComponent } from './gestion-credit/souscription/souscription.component';
import { Demansous1Component } from './gestion-credit/souscription/demansous1/demansous1.component';
import { Demansous2Component } from './gestion-credit/souscription/demansous2/demansous2.component';


export const ROUTES : Routes = [
  { path:'soussuiv1',component:Demansous1Component},
  { path:'soussuiv2',component:Demansous2Component},
  { path:'souscription',component:SouscriptionComponent},
  { path:'demfin',component:DemandefinComponent},
  { path:'dempret',component:DemandeficheComponent},
  { path:'demsous/:id',component:Demansous1Component},
  { path:'detail/:id',component:DetailComponent},
  { path:'detail',component:DetailComponent},
  { path:'home',component:HomeComponent},
  { path:'pret',component:DemandePretComponent},
  { path:'wallet',component:GestionWalletComponent},
  { path:'profil',component:ProfilComponent},
  { path:'login',component:LoginComponent},
  { path:'cashin',component:CashinComponent},
  { path:'cashout',component:CashoutComponent},
  { path: 'credit', component:GestionCreditComponent},
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
    GestionCreditComponent,
    DemandePretComponent,
    DetailComponent,
    DemandeficheComponent,
    DemandefinComponent,
    SouscriptionComponent,
    Demansous1Component,
    Demansous2Component,
  ],
  imports: [
    GoogleChartsModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
