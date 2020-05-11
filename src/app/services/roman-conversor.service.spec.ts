import { TestBed } from '@angular/core/testing';

import { RomanConversorService } from './roman-conversor.service';

describe('RomanConversorService', () => {
  let service: RomanConversorService;
  beforeAll(()=>{
    service = TestBed.inject(RomanConversorService);
  })
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it('convertir_el_0', () => {
    let res = service.transformNumber(0)
    expect(res).toEqual("El número ingresado no puede representarse en notación Romana")
  });
  it('convertir_decimal', () => {
    let res = service.transformNumber(15.45)
    expect(res).toEqual("El número ingresado debe ser entero")
  });
  it('convertir_Mayor_Mil', () => {
    let res = service.transformNumber(2000)
    expect(res).toEqual("El número ingresado debe ser menor o igual a 1000")
  });
  it('convertir_Negativo', () => {
    let res = service.transformNumber(-10)
    expect(res).toEqual("El número ingresado debe ser positivo")
  });
  it('convertir_el_1', () => {
    let res = service.transformNumber(1)
    expect(res).toEqual("I")
  });
  it('convertir_el_10', () => {
    let res = service.transformNumber(10)
    expect(res).toEqual("X")
  });
  it('convertir_el_15', () => {
    let res = service.transformNumber(15)
    expect(res).toEqual("XV")
  });
  it('convertir_el_25', () => {
    let res = service.transformNumber(25)
    expect(res).toEqual("XXV")
  });
  it('convertir_el_30', () => {
    let res = service.transformNumber(30)
    expect(res).toEqual("XXX")
  });
  it('convertir_el_37', () => {
    let res = service.transformNumber(37)
    expect(res).toEqual("XXXVII")
  });
  it('convertir_el_45', () => {
    let res = service.transformNumber(45)
    expect(res).toEqual("XLV")
  });
  it('convertir_el_54', () => {
    let res = service.transformNumber(54)
    expect(res).toEqual("LIV")
  });
  it('convertir_el_99', () => {
    let res = service.transformNumber(99)
    expect(res).toEqual("XCIX")
  });
  it('convertir_el_113', () => {
    let res = service.transformNumber(113)
    expect(res).toEqual("CXIII")
  });
  it('convertir_el_187', () => {
    let res = service.transformNumber(187)
    expect(res).toEqual("CLXXXVII")
  });
  it('convertir_el_325', () => {
    let res = service.transformNumber(325)
    expect(res).toEqual("CCCXXV")
  });
  it('convertir_el_529', () => {
    let res = service.transformNumber(529)
    expect(res).toEqual("DXXIX")
  });
  it('convertir_el_999', () => {
    let res = service.transformNumber(999)
    expect(res).toEqual("CMXCIX")
  });
  it('convertir_el_1000', () => {
    let res = service.transformNumber(1000)
    expect(res).toEqual("M")
  });
});
