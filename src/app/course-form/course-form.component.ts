import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  catagories = [
    {id: 1, name:"Development"},
    {id: 2, name:"Art"},
    {id: 3, name:"Language"}
  ]

  onSubmit(f){
    console.log(f.value)
  }
}
