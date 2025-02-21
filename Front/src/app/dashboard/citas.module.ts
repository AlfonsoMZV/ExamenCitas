import { RouterModule, Routes } from "@angular/router";
import { CitasComponent } from "./citas/citas.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbHighlight, NgbDatepickerModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { AgGridModule } from "ag-grid-angular";
import { CitasService } from "../../service/citas.service";
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CitasFormDialogComponent } from "./citas/citas-form/citas-form-dialog.component";
import { CitasDeleteDialogComponent } from "./citas/citas-delete/citas-delete-confirm.component";

const routes: Routes = [
	{
		path: "",
		component: CitasComponent
	},
];

@NgModule({
	declarations: [
		CitasComponent,
		CitasFormDialogComponent,
		CitasDeleteDialogComponent
	],
	imports: [
		RouterModule.forChild(routes),
		NgbHighlight,
		NgbDatepickerModule,
		NgbTypeaheadModule,
		HttpClientModule,
		CommonModule,
		RouterModule,
		AgGridModule,
		ReactiveFormsModule,
		FormsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
	],
	providers: [
		CitasService
	]
})
export class CitasModule { }
