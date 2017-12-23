import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent implements OnInit {

  games: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/game').subscribe(data => {
      console.log(data);
      this.games = data;
    });
  }

}
