import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interviewprep';
  constructor(private fb: FormBuilder) {  }

  name = 'Ruchitha Boddula';
  role = 'Full Stack Developer';
  email = 'ruchithaboddula626@gmail.com';
  phone = '+91 83670 67917';


}
