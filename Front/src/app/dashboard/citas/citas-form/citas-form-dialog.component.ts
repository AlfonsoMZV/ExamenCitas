import { DatePipe } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { CitasModel } from "../../../../model/citas.model";
import { CitasService } from "../../../../service/citas.service";

@Component({
    selector: 'app-citas-form',
    templateUrl: './citas-form-dialog.component.html',
    styleUrls: ['./citas-form-dialog.component.scss'],
    providers: [DatePipe, provideNativeDateAdapter()]
})
export class CitasFormDialogComponent implements OnInit {

    listTipo: any = [
        {
            cita: "Consulta"
        },
        {
            cita: "Servicio"
        },
        {
            cita: "Tratamiento"
        },
        {
            cita: "Revisión"
        },
        {
            cita: "Estudios"
        }
    ]
    
    fecha!: Date;
    tipocita!: any;
    paciente!: string;
    medico!: string;
    dto: CitasModel = {
        fecha: "",
        paciente: "",
        tipocita: "",
        medico: ""
    };

    constructor(
        public dialogRef: MatDialogRef<CitasFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private service: CitasService,
    ){}

    ngOnInit() {
        this.initForm();
    }
    
    onNoClick(): void {
        this.dialogRef.close();
    }

    initForm() {
        if(this.data.crud == 'modificar'){
            this.paciente = this.data.paciente;
            this.medico = this.data.medico;
            this.tipocita = this.data.tipocita; 
        }
    }

    save(){
        this.dto.fecha = this.dateCustomFormatting(this.fecha) + ' 12:00 PM';
        this.dto.medico = this.medico;
        this.dto.paciente = this.paciente;
        this.dto.tipocita = this.tipocita;
        this.service.createCita(this.dto).subscribe({
            next: (result) => {
                alert(result);
                this.dialogRef.close();
            },
            error: (err: any) => {
                alert("Se agrego correctamente");
                this.dialogRef.close();
            }
        });
    }

    update() {
        this.dto.fecha = this.dateCustomFormatting(this.fecha) + ' 12:00 PM';
        this.dto.medico = this.medico;
        this.dto.paciente = this.paciente;
        this.dto.tipocita = this.tipocita;
        this.service.updateCita(this.dto, this.data.id).subscribe({
            next: (result) => {
                alert(result);
                this.dialogRef.close();
            },
            error: (err: any) => {
                alert("Se modifico correctamente");
                this.dialogRef.close();
            }
        });
    }

    dateCustomFormatting(date: Date): string {
        const padStart = (value: number): string =>
            value.toString().padStart(2, '0');
        let fecha = `${padStart(date.getDate())}/${padStart(date.getMonth() + 1)}/${date.getFullYear()}`;
        return fecha;
    }
    

}