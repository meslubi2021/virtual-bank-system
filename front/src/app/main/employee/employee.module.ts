import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SummaryComponent } from './summary/summary.component';
import { MatPaginatorModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatTableModule, MatButtonModule, MatInputModule, MatAutocompleteModule, MatOptionModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeSupportComponent } from './employee-support/employee-support.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDialogComponent } from './misc/user-dialog/user-dialog.component';
import { UserEditDialogComponent } from './misc/user-edit-dialog/user-edit-dialog.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    EmployeeComponent,
    SummaryComponent,
    EmployeeSupportComponent,
    PaymentCreateComponent,
    UserListComponent,
    UserDialogComponent, UserEditDialogComponent,
    CreditListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    EmployeeRoutingModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatCardModule,
    MomentModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatOptionModule
  ],
  entryComponents: [UserDialogComponent, UserEditDialogComponent]
})
export class EmployeeModule { }
