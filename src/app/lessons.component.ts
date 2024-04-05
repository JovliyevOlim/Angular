import {
  Component,
  OnInit,
  Output,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { merge } from 'rxjs';

import { Lesson } from './lesson';
import { LessonsService } from './lessons.service';

@Component({
    selector: "lessons",
    template:`
    <!-- <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table> -->
    <!-- <h1 class="display-1">{{getTitle()}}</h1> -->
    <!-- <input type="text" [(ngModel)]="userName">
    <p>{{userName}}</p>
    <button [ngClass]="{'btn':isActive,'btn-primary':isActive}">Test1 </button>
    <button [ngStyle]="{'backgroundColor': isActive ? 'green':'white',
  color:isActive ? 'white':'gray' }">Test</button>
    <button [style.backgroundColor]="isActive ? 'green' : 'white'" (click)="onTestButtonClicked()">Reset</button> -->
    <button (click)='onNavigateButtonClick()'>Navigate</button>
    <ul>
       <li  *ngFor="let lesson of lessons" (click)="onSelect(lesson)">
       <a routerLinkActive="active" class="nav-link" [routerLink]="['/darslar',lesson.id,lesson.title]" >              {{lesson.title}}
</a>
       </li>
    </ul>

    <app-lesson [lesson]="selectedLesson" (changeTitle)="onTitleChange($event)">Bu <h2>lesson</h2> komponentidagi <div class="my-content">kontent</div></app-lesson>
    <!-- <img src="{{logoUrl}}"> -->
    <!-- <img [src]="logoUrl"> -->
    `
})
export class LessonsComponent implements OnInit{
  colSpan:number = 2;
  isBtnApplicable:boolean =false;
  isBtnPrimaryApplicable:boolean =false;
  isActive:boolean = true
  title:string = "Darslar ro'yxati"
  logoUrl:string = 'https://i.picsum.photos/id/2/300/400.jpg?hmac=l3L4bZ6wdAi-KWolc5wbOkK93KZT-GiSVwQU4U1jn6Q'
  userName:string = '';
 getTitle():string{
  return "Sarlavha "+this.title
 }

  lessons:Lesson[];
  @Output() selectedLesson:Lesson;

 constructor(private router:Router, private route:ActivatedRoute, lessonSVc:LessonsService){
   this.lessons = lessonSVc.getLessons();
 }
    titleParam:number = 0;
  ngOnInit(): void {

    let params$ = merge(this.route.paramMap,this.route.queryParamMap);
    console.log(params$)
    params$.subscribe(combinedParams=>{
      console.log(combinedParams)
      this.titleParam =  parseInt(combinedParams.get('id')  as string);
        this.getLessonByTitle();
        let page = combinedParams.get('page');
        let order = combinedParams.get('order');
        console.log(page)
        console.log(order)
    })

  }
  getLessonByTitle() :void{
    if(!!this.titleParam){
       var lesson = this.lessons.find(les=>les.id == this.titleParam);
       this.onSelect(lesson as Lesson)
    }
  }
  onSelect(lesson:Lesson):void {
    this.selectedLesson = lesson
  }

  onNavigateButtonClick(){
      this.router.navigate(['/darslar',1,'Angular asoslari'],{
        queryParams:{page:10,order:"resr"}
      })
  }

 onTestButtonClicked(){
  this.isActive=!this.isActive
  this.userName='';
      console.log("tugma bosildi");
 }
 onTextInput(e:Event){
    this.userName = ((<HTMLTextAreaElement>e?.target).value)
 }
  onTitleChange(isPlus:boolean){
  console.log(isPlus)
  isPlus ? this.selectedLesson.title += "+" : this.selectedLesson.title += "-"
 }

}
