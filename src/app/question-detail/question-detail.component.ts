import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionDetailComponent implements OnInit {

  question = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuestionDetail(this.route.snapshot.params['id']);
  }

  getQuestionDetail(id) {
    this.http.get('/question/' + id).subscribe(data => {
      this.question = data;
    });
  }

  deleteQuestion(id) {
    this.http.delete('/question/' + id)
      .subscribe(res => {
          this.router.navigate(['/questions']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
