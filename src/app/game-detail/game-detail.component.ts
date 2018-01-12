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
  result;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.getGameDetail(this.route.snapshot.params['id']);
  }

  getGameDetail(id) {
    this.http.get('/game/' + id).subscribe(data => {
      this.game = data;
      this.parseData(data);
      this.result = this.getResult();
    });
  }

  parseData(data) {
    console.log(data);
    for (let i = 0; i < this.game.settings.round; i++) {
      let player1value =


        this.tableData.push({
          'question': this.game.questions[i].content,
          'answer_content': this.getCorrectAnswerContent(i),
          'answer_char': this.game.questions[i].t,
          'player1': {
            'answer_content': this.getPlayerAnswerContent(1, i),
            'answer_char': this.getPlayerAnswerChar(1, i),
            'correct': this.isPlayerCorrectAnswer(1, i)
          },
          'player2': {
            'answer_content': this.getPlayerAnswerContent(2, i),
            'answer_char': this.getPlayerAnswerChar(2, i),
            'correct': this.isPlayerCorrectAnswer(2, i)
          }
        });
    }

    console.log(this.tableData);

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


  isPlayerCorrectAnswer(player, i) {
    if (player === 1) {
      if (i in this.game.player1.answers) {
        return this.game.questions[i].t === this.game.player1.answers[i].value ? true : false;
      }
      return false;
    }

    if (i in this.game.player2.answers) {
      return this.game.questions[i].t === this.game.player2.answers[i].value ? true : false;
    }
    return false;
  }

  getPlayerAnswerChar(player, i) {
    if (player === 1) {
      if (i in this.game.player1.answers) {
        return this.game.player1.answers[i].value;
      }
      return 'x';
    }

    if (i in this.game.player2.answers) {
      return this.game.player2.answers[i].value;
    }
    return 'x';
  }

  getPlayerAnswerContent(player, i) {
    let mode;

    if (player === 1) {
      if (!(i in this.game.player1.answers)) {
        return '-';
      }
      mode = this.game.player1.answers[i].value.toUpperCase();
    } else {
      if (!(i in this.game.player2.answers)) {
        return '-';
      }
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

  getResult() {
    if (this.game.player1.points > this.game.player2.points) {
      return 1;
    } else if (this.game.player2.points > this.game.player1.points) {
      return 2;
    } else {
      return 0;
    }
  }

}
