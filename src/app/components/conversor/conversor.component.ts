import { Component, OnInit } from '@angular/core';
import { RomanConversorService } from '../../services/roman-conversor.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  constructor(private romanService:RomanConversorService) {  }
  resultado: String ="-"
  showError: boolean = false
  errorMessage: string =""
  ngOnInit(): void {
  }
  transform(value){
    this.showError = false
    let conversion= this.romanService.transformNumber(value);
    if (value > 1000) {
      this.showError = true
      this.errorMessage = "Ingrese un valor inferior a 1000"
     return 
    }
    if (value <= 0){
      this.errorMessage = "Ingrese un valor mayor a 0"
      this.showError = true
      return
    }
    if (value == undefined) {
      this.showError = true
      this.errorMessage = "Ingrese un valor válido"
      return
    }
    if (conversion.length < 10) {
      this.resultado = conversion
    }
  }
}
