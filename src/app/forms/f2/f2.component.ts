import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-f2',
  templateUrl: './f2.component.html',
  styleUrls: ['./f2.component.css']
})
export class F2Component implements OnInit {

  constructor() { }

  arr:any[] = []

  ngOnInit(): void {
  }

  myPersonForm = new FormGroup({
    name : new FormControl('my name', [Validators.required, Validators.minLength(4),]),
    age : new FormControl(2, [
      Validators.required, 
      Validators.min(3), 
      Validators.pattern("^[0-9]*$")]),
  })

  logthenamer(){
    console.log(this.myPersonForm);

    console.log({
      errors:this.myPersonForm.errors,
      dirty:this.myPersonForm.dirty,
      pristine:this.myPersonForm.pristine,
      status:this.myPersonForm.status,
      value:this.myPersonForm.value,
      valid:this.myPersonForm.valid,
      invalid:this.myPersonForm.invalid,
      touched:this.myPersonForm.touched,
      untouched:this.myPersonForm.untouched,
    });

  }

  onShukiSubmit(){
    this.arr.push({name:this.myPersonForm.value.name, age:this.myPersonForm.value.age, })
  }

}
