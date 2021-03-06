import { Component } from '@angular/core';
import { PacienteDTO } from 'src/models/DTO/Paciente.dto';
import { Medicamento } from 'src/models/Medicamento';
import { Doenca } from 'src/models/Doenca';
import { Alergia } from 'src/models/Alergia';
import { ContatosDeEmergencia } from 'src/models/ContatosDeEmergencia';
import { PacienteServiceService } from './paciente-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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



