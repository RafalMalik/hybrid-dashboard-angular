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

  game = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.getGameDetail(this.route.snapshot.params['id']);
  }

  getGameDetail(id) {
    this.http.get('/game/' + id).subscribe(data => {
      this.game = data;
    });
  }


}
