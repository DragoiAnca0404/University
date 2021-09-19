import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class MainModule { }
