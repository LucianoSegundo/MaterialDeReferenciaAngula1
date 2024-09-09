import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css'
})
export class Component03Component {
  imagem:string = "Tapeçaria.png";
  vezes = 1;
  aaa = "aaaa";

  alterarIMG(){
    this.vezes += 1;
    this.aaa = "paulo " + this.vezes;
    if(this.imagem === "Tapeçaria.png") this.imagem = "voce cervo.png";
      else if(this.imagem === "voce cervo.png") this.imagem = "Camarada Yoshinoo.png";
        else if(this.imagem === "Camarada Yoshinoo.png") this.imagem = "estados unidos.png";
          else if(this.imagem === "estados unidos.png") this.imagem = "expropriação.png";
            else if(this.imagem === "expropriação.png") this.imagem = "Natal.png";
              else if(this.imagem === "Natal.png") this.imagem = "Orientado a Objeto melhorado.jpg";
                else if(this.imagem === "Orientado a Objeto melhorado.jpg") this.imagem = "Screenshot_20221229-221837.png";
                  else if(this.imagem === "Screenshot_20221229-221837.png") this.imagem = "Screenshot_20230222-191902.png";
                    else if(this.imagem === "Screenshot_20230222-191902.png") this.imagem = "Screenshot_20230708-224048.png";
                      else if(this.imagem === "Screenshot_20230708-224048.png") this.imagem = "WhatsApp Image 2023-02-12 at 19.26.04.jpeg";
                        else if(this.imagem === "WhatsApp Image 2023-02-12 at 19.26.04.jpeg") this.imagem = "Tapeçaria.png";
  }
}
