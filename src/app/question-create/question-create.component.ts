import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionCreateComponent implements OnInit {

  question = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveQuestion() {
    this.http.post('/question', this.question)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/questions']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
