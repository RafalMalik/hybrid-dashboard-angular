import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GameDetailComponent implements OnInit {

  game;
  tableData = [];

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.getGameDetail(this.route.snapshot.params['id']);
  }

  getGameDetail(id) {
    this.http.get('/game/' + id).subscribe(data => {
      this.game = data;
      this.parseData(data);
    });
  }

  parseData(data) {
    for (let i = 0; i < this.game.settings.round; i++) {
      this.tableData.push({
        'question': this.game.questions[i].content,
        'answer_content': this.getCorrectAnswerContent(i),
        'answer_char': this.game.questions[i].t,
        'player1': {
          'avatar': '',
          'answer_content': this.getPlayerAnswerContent(i, 1),
          'answer_char': this.game.player1.answers[i].value,
          'correct': this.game.questions[i].t === this.game.player1.answers[i].value ? true : false
        },
        'player2': {
          'avatar': '',
          'answer_content': this.getPlayerAnswerContent(i, 2),
          'answer_char': this.game.player2.answers[i].value,
          'correct': this.game.questions[i].t === this.game.player2.answers[i].value ? true : false
        }
      });
    }
  }

  getCorrectAnswerContent(i) {
    switch (this.game.questions[i].t.toUpperCase()) {
      case 'A':
        return this.game.questions[i].a;
      case 'B':
        return this.game.questions[i].b;
      case 'C':
        return this.game.questions[i].c;
      case 'D':
        return this.game.questions[i].d;
    }
    return 0;
  }

  getPlayerAnswerContent(i, player) {
    let mode = this.game.player1.answers[i].value.toUpperCase();

    if (player === 2) {
      mode = this.game.player2.answers[i].value.toUpperCase();
    }

    switch (mode) {
      case 'A':
        return this.game.questions[i].a;
      case 'B':
        return this.game.questions[i].b;
      case 'C':
        return this.game.questions[i].c;
      case 'D':
        return this.game.questions[i].d;
    }
    return 0;
  }


}
