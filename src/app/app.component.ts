import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ElTest';


  ngOnInit() {
    const calculator = new Calculator();
    const rta = calculator.multiply(2, 2);
    console.log(rta === 4);

    const divide = calculator.divide(2, 0);
    console.log(divide === null)

  }

}
