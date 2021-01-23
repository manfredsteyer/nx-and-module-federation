import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthLibModule {}
