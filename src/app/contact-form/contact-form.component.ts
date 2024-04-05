import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('muvaffaqqiyatli jonatildi')
  }

  contactMethods = [
    {type:1,name:'E-mail'},
    {type:2,name:'SMS'},
    {type:3,name:'Telegram'}
  ]

  onNameChange(ngModelObj:Event){
    console.log(ngModelObj)
  }
}
