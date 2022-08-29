import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatFormFieldModule, MatInputModule,
    MatSelectModule, MatTableModule, MatButtonModule, MatRadioModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule,
    MatSelectModule, MatTableModule, MatButtonModule, MatRadioModule
  ]
})
export class MaterialModule { }
