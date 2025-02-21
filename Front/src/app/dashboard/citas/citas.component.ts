import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../../service/citas.service';
import { CitasModel } from '../../../model/citas.model';
import { MatDialog } from '@angular/material/dialog';
import { CitasFormDialogComponent } from './citas-form/citas-form-dialog.component';
import { CitasDeleteDialogComponent } from './citas-delete/citas-delete-confirm.component';

@Component({
	selector: 'app-citas-component',
	templateUrl: './citas.component.html',
	styleUrl: './citas.component.scss'
})
export class CitasComponent implements OnInit{
	
	citasList!: CitasModel[];
	id!: number;

    constructor(
		private service: CitasService,
		private dialog: MatDialog
    ) {}

	ngOnInit() {
		this.getCitas();
	}

	openDialogNuevo(): void {
		const dialogRef = this.dialog.open(CitasFormDialogComponent, {
			width: '500px',		  
			height: '500px',
			data: {crud: 'nuevo'},
		});
	
		dialogRef.afterClosed().subscribe(() => {
		  this.getCitas();
		});
	}

	getCitas() {
		this.service.getAllCitas().subscribe((data: any) => {
            this.citasList =[];
			this.citasList = data;
        });
	}

	getCitaById() {
		if(this.id === undefined || this.id == null) this.id =0;
		this.service.getByIdCitas(this.id).subscribe((data: any) => {
			this.citasList=[];
            this.citasList.push(data);
        });
	}
	
	updateDialog(cita: CitasModel){
		const dialogRef = this.dialog.open(CitasFormDialogComponent, {
			width: '500px',		  
			height: '500px',
			data: {crud: 'modificar', id: cita.id, paciente: cita.paciente, medico: cita.medico, fecha: cita.fecha, tipocita: cita.tipocita},
		});
	
		dialogRef.afterClosed().subscribe(() => {
		  this.getCitas();
		});
	}

	deleteDialog(cita: CitasModel){
		const dialogRef = this.dialog.open(CitasDeleteDialogComponent, {
			width: '400px',		  
			height: '200px',
			data: {id: cita.id},
		});
	
		dialogRef.afterClosed().subscribe(() => {
		  this.getCitas();
		});
	}
}
