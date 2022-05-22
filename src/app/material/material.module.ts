import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

const Modules = [
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports: [
    ...Modules
  ]
})
export class MaterialModule { }
