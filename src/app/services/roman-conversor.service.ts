import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanConversorService {

  constructor() { }
  transformNumber(arabigo: number) {
    let centenasRomanos = ""
    let decenasRomanos = ""
    let unidadesRomanos = ""
    if (arabigo > 1000) {
      return "El número ingresado debe ser menor o igual a 1000"
    }
    if (arabigo < 0) {
      return "El número ingresado debe ser positivo"
    }
    if (arabigo == 0) {
      return "El número ingresado no puede representarse en notación Romana"
    }
    if ((arabigo - Math.floor(arabigo)) !== 0) {
      return "El número ingresado debe ser entero"
    }
    if (arabigo == 1000) {
      return "M"
    }
    if (arabigo > 100) {
      let centenasArabigas = Math.floor(arabigo / 100)
      centenasRomanos = this.transformaCentena(centenasArabigas)
      arabigo = arabigo % 100
    }
    let decenasArabigas = Math.floor(arabigo / 10)
    decenasRomanos = this.transformaDecena(decenasArabigas)
    arabigo = arabigo % 10
    if (arabigo > 0) {
      unidadesRomanos = this.transformaUnidad(arabigo)
    }
    let numeroRomano = `${centenasRomanos}${decenasRomanos}${unidadesRomanos}`
    return numeroRomano
  }
  transformaCentena(n: Number) {
    switch (n) {
      case (1):
        return "C"
      case (2):
        return "CC"
      case (3):
        return "CCC"
      case (4):
        return "CD"
      case (5):
        return "D"
      case (6):
        return "DC"
      case (7):
        return "DCC"
      case (8):
        return "DCC"
      case (9):
        return "CM"
    }

  }
  transformaDecena(n: Number) {
    switch (n) {
      case (1):
        return "X"
      case (2):
        return "XX"
      case (3):
        return "XXX"
      case (4):
        return "XL"
      case (5):
        return "L"
      case (6):
        return "LX"
      case (7):
        return "LXX"
      case (8):
        return "LXXX"
      case (9):
        return "XC"
    }
  }
  transformaUnidad(n: Number) {
    switch (n) {
      case (1):
        return "I"
      case (2):
        return "II"
      case (3):
        return "III"
      case (4):
        return "IV"
      case (5):
        return "V"
      case (6):
        return "VI"
      case (7):
        return "VII"
      case (8):
        return "VIII"
      case (9):
        return "IX"
    }
  }
}
