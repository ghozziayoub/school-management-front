import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup
  constructor(private fb: FormBuilder) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z.'-]+"),
        Validators.minLength(2)

      ])
    }
    this.myForm = this.fb.group(formControls);
  }
get name(){
  return this.myForm.get('name')
}
  ngOnInit(): void {
  }

}
