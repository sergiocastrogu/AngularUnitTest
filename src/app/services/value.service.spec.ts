import {TestBed} from '@angular/core/testing'
import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ ValueService ]
    })
    service = TestBed.inject(ValueService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getValue', ()=> {
    
    it('should return "my value"', () => {
      expect(service.getValue()).toBe('my value')
    });

  });

  describe('Test for setValue',()=> {
    it('should change the value', () => {
      service.setValue('change');
      expect(service.getValue()).toBe('change');
    })
  })

  describe('Test for getPromiseValue',()=> {
    it('should return "value" from promise', (doneFn) => {
      service.getPromiseValue().then((value)=>{
        expect(value).toBe('value');
        doneFn();
      });
    });

    it('should return "value" using async', async () => {
      const rta = await service.getPromiseValue();
      expect(rta).toBe('value');
    });

  });

  describe('Test for getObservableValue',()=> {
    it('should return "obserbavle value" from getObservableValue', (doneFn) => {
      service.getObservableValue().subscribe({
        next: (value)=> {
          expect(value).toBe("obserbavle value");
          doneFn();
        }
      });
    });
  });




});
