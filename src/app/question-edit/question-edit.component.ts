import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionEditComponent implements OnInit {

  question = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getQuestion(this.route.snapshot.params['id']);
  }

  getQuestion(id) {
    this.http.get('/question/' + id).subscribe(data => {
      this.question = data;
    });
  }

  updateQuestion(id, data) {
    console.log('DATA KURWA');
    console.log(data);
    this.http.put('/question/' + id, this.question)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/questions']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
