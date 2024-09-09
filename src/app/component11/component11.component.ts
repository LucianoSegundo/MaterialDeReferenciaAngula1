import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelos/Pessoa';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-component11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.css'
})
export class Component11Component {
  identificador:number;
  opcaoCadastrar:boolean = true;
  vetor:Pessoa[] =[];

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('',[Validators.required, Validators.minLength(3)])
  });


  

  cadastrar(){

    this.vetor.push(this.formulario.value as Pessoa);

    this.formulario.reset();

    console.table(this.vetor);
  }

  selecionar( id:number){
    let temporario:Pessoa;
    temporario = this.vetor.at(id);

    this.identificador = id;
    this.formulario.setValue(temporario);
    this.opcaoCadastrar = false;

  }

  alterar(){
    this.vetor.splice(this.identificador,1,this.formulario.value as Pessoa);
    this.opcaoCadastrar = true;
    this.formulario.reset();
    this.identificador = null;

  }

  cancelar(){
    this.identificador= null;
    this.formulario.reset();

    this.opcaoCadastrar= true;
  }

  remover(){
    this.vetor.splice(this.identificador,1);
    this.formulario.reset();

    this.identificador = null;
    this.opcaoCadastrar= true;
  }

}
