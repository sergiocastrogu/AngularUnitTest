export class FakeValueService {

  constructor() { }

  getValue(){
    return 'value';
  }

  setValue(value: string){}

  getPromiseValue(){
    return Promise.resolve('fake value');
  }
}
