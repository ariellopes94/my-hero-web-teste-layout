import { API_CONFIG } from '../config/api.config';
import { PacienteDTO } from './../models/DTO/Paciente.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {

  constructor(public http: HttpClient) { }

  fichaDoPaciente() : Observable<PacienteDTO> {

    //APAGAR DPS
    var numeroFichaPaciente : string = window.location.href;
    //numeroFichaPaciente = numeroFichaPaciente.replace("http://localhost:8100/#/paciente/", "");
    //alert(numeroFichaPaciente);
    //AX700

    //

    return this.http.get <PacienteDTO>(`${API_CONFIG.baseUrl}/pacientes/fichaDoPaciente/ATR30`)

}
}



