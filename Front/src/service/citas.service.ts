import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { CitasModel } from "../model/citas.model";

@Injectable({
    providedIn: 'root'
})
export class CitasService {
    
    private _url: string = 'http://localhost:8080';
    constructor(
        private http: HttpClient
    ) {}

    getAllCitas(): Observable<any> {
        return this.http.get(this._url + "/api/v1/getAllCitas");
    }

    createCita(dto: CitasModel): Observable <any> {
        return this.http.post(this._url + "/api/v1/createCita", dto);
    }

    getByIdCitas(id: number): Observable<any> {
        return this.http.get(this._url + "/api/v1/getByIdCitas/"+id);
    }

    updateCita(dto: CitasModel, id: number): Observable <any> {
        return this.http.put(this._url + "/api/v1/updateCita/" + id, dto);
    }

    deleteCita(id: number): Observable <any> {
        return this.http.delete(this._url + "/api/v1/deleteCita/" + id);
    }
}