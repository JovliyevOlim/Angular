import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Lesson } from '../lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() lesson:Lesson;

  @Output("changeTitle") titleChange =  new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  onPlusButtonClick(){
    console.log('rek')
    this.titleChange.emit(true);
  }
  onMinusButtonClick(){
    this.titleChange.emit(false);
  }

}
