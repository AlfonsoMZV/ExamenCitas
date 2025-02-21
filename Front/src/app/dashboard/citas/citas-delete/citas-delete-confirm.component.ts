import { DatePipe } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CitasService } from "../../../../service/citas.service";

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './citas-delete-confirm.component.html',
    providers: [DatePipe]
})
export class CitasDeleteDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<CitasDeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private service: CitasService,
    ){}

    cancel(): void {
        this.dialogRef.close();
    }

    delete() {
        this.service.deleteCita(this.data.id).subscribe({
            next: (result) => {
                alert(result);
                this.dialogRef.close();
            },
            error: (err: any) => {
                alert("Se elimino correctamente");
                this.dialogRef.close();
            }
        });
    }

}