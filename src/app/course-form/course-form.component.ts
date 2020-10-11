import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  categories=[
    {id:1, name: "Art"},
    {id:2, name: "Dev"},
    {id:3, name: "Lang"}
  ];
  onSubmit(f){
    console.log(f);
  }
}
