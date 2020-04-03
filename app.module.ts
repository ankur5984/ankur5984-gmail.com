import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

import { RoutrGuardService } from './service/routr-guard.service';
import { ChildlistComponent } from './childlist/childlist.component';

import { CommonModule } from '@angular/common';
import { Register1Component } from './register1/register1.component';

import { PayementdetailsComponent } from './payementdetails/payementdetails.component';
import { MenuComponent} from './menu/menu.component';
import { ForgetpasswoComponent } from './forgetpasswo/forgetpasswo.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AdminComponent } from './admin/admin.component';


import { AdmincurrentneedComponent } from './admincurrentneed/admincurrentneed.component';
import { CurrentneedComponent } from './currentneed/currentneed.component';
import { HappinesssupportComponent } from './happinesssupport/happinesssupport.component';
import { PaymentComponent } from './payment/payment.component';
import { NeccessitysupportComponent } from './neccessitysupport/neccessitysupport.component';
import { MoneysupportComponent } from './moneysupport/moneysupport.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    GalleryComponent,
    BlogComponent,
    InfoComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    ErrorComponent,
    Register1Component,
    ChildlistComponent,
    Register1Component,

    PayementdetailsComponent,
    MenuComponent,
    ForgetpasswoComponent,
    VolunteerComponent,
    AdminComponent,
    AdmincurrentneedComponent,
    CurrentneedComponent,
    HappinesssupportComponent,
    PaymentComponent,
    NeccessitysupportComponent,
    MoneysupportComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
      { path: '', component: HeaderComponent },
      { path: 'admin', component: AdminComponent},
      { path: 'home', component: HeaderComponent },
      { path: 'login', component: LoginComponent },
      { path: 'need', component: CurrentneedComponent},
      { path: 'blog', component: BlogComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'team', component: TeamComponent },
      { path: 'blog', component: BlogComponent },
      {path: 'payment/:id', component: PayementdetailsComponent,canActivate:[RoutrGuardService]},
      {path: 'paymentfinal', component : PaymentComponent},
      {path: 'happiness' , component: HappinesssupportComponent},
      { path: 'register', component: Register1Component},
      { path: 'volunteer', component: VolunteerComponent},
      { path: 'admincneed', component: AdmincurrentneedComponent},
      {path: 'payment1/:amount', component:PaymentComponent},
      { path: 'child', component: ChildlistComponent },
      {path: 'forget', component: ForgetpasswoComponent},
      { path: 'money', component: MoneysupportComponent},
      {path:'adminlogin', component: AdminloginComponent},
      { path: 'neccessity', component: NeccessitysupportComponent},
      { path: '**', component: ErrorComponent },

    ]),
    CommonModule,

    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
