import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  orderForm:FormGroup;
  items:FormArray;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      customerName: new FormControl(),
      items:this.formBuilder.array([this.createItem()])
    })
  }
  createItem():FormGroup {
   return this.formBuilder.group({
      name:new FormControl(),
      price:new FormControl(),
    })
  }
  addItem():void{
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem())
  }
}
