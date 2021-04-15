import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {ProgressbarModule} from "ngx-bootstrap/progressbar";



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
  ]
})
export class ProfileModule { }
