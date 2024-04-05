import { Lesson } from './lesson';

export class LessonsService{

  getLessons():Lesson[]{
    // web serverga ulanib royxatni olib kelish logikasi

    let lessons = <Lesson[]>JSON.parse(
      `[
        {"id":1,"title":"Angular asoslari","price":50,"duration":16,"intakeDeadline":"2019-05-31"},
        {"id":2,"title":"Web API","price":40,"duration":15,"intakeDeadline":"2019-05-31"},
        {"id":3,"title":"Entity Framework","price":30,"duration":14,"intakeDeadline":"2019-05-31"},
        {"id":4,"title":"MS SQL Server","price":60,"duration":13,"intakeDeadline":"2019-05-31"}
      ]`
    )
    // return ["Angular asoslari","Web API","Entity Framework","MS SQL Server"]
    return lessons
  }

}
