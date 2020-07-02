import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit {

  constructor() { 
  }

  @Input() ctrl:FormControl

  ngOnInit(): void {
    console.log(this.ctrl);
  }

  logy(){
    console.log(this.ctrl);
   /* 
for (let i = 0; i < array.length; i++) {
  
  switch ( array[i]) {
    case value:break;
    case value:break;
    case value:break;
    case value:break;
    case value:break;
  
    default:
      break;
  }
}
*/

  }

}
