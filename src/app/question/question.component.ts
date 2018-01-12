import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit {

  questions: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/question').subscribe(data => {
      this.questions = data;
    });
  }

}
