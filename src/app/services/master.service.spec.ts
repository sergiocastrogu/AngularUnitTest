import {TestBed} from '@angular/core/testing'
import { MasterService } from './master.service';
import { FakeValueService } from './value-fake.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);
    TestBed.configureTestingModule({
      providers:[ 
        MasterService,
        {provide: ValueService, useValue: spy}
      ]
    })
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
  });

  it('should be created', () => {
    expect(masterService).toBeTruthy();
  });

  // it('should be "my value" from the real service', () => {
  //   let valueService =  new ValueService();
  //   let masterService = new MasterService(valueService);
  //   expect(masterService.getValue()).toBe("my value");
  // });

  // it('should be "value" from the fake service', () => {
  //   let valueService =  new FakeValueService();
  //   let masterService = new MasterService(valueService as unknown as ValueService);
  //   expect(masterService.getValue()).toBe("value");
  // });

  // it('should be "value" from the fake object', () => {
  //   let fake =  {getValue: () => 'value'}
  //   let masterService = new MasterService(fake as ValueService);
  //   expect(masterService.getValue()).toBe("value");
  // });


  it('should call to getValue from ValueService', () => {
    //const valueService = jasmine.createSpyObj('ValueService', ['getValue']);
    valueServiceSpy.getValue.and.returnValue('value');
    expect(masterService.getValue()).toBe("value");
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });
});
