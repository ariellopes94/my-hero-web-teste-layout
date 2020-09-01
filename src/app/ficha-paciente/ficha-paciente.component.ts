import { PacienteServiceService } from './../paciente-service.service';
import { PacienteDTO } from './../../models/DTO/Paciente.dto';
import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/models/Medicamento';
import { Doenca } from 'src/models/Doenca';
import { Alergia } from 'src/models/Alergia';
import { ContatosDeEmergencia } from 'src/models/ContatosDeEmergencia';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.component.html',
  styleUrls: ['./ficha-paciente.component.css']
})
export class FichaPacienteComponent implements OnInit {

  public fichaPaciente : PacienteDTO;

  public medicamentos: Medicamento[];
  public doencas : Doenca[];
  public alergias : Alergia[];
  public contatoDeEmergencias : ContatosDeEmergencia[];
  constructor(public pacienteService: PacienteServiceService) { }

  ngOnInit() {


    //TABELA

  

  //
    this.pacienteService.fichaDoPaciente()
    .subscribe(reponse => {
      this.fichaPaciente = reponse;
     
     this.medicamentos = this.fichaPaciente.medicamentos;
     this.doencas = this.fichaPaciente.doencas;
     this.alergias = this.fichaPaciente.alergias;
     this.contatoDeEmergencias = this.fichaPaciente.contatosDeEmergencias;
      
 
     console.log(this.fichaPaciente)
    },
    error => {
       console.log(error);
    });

  

  
}
  
}

