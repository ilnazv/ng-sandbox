import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrelloApiService, ICard } from '../shared/trello-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  public items: Observable<any[]>;
  public cards: Observable<ICard[]>;
  public loading = true;

  constructor(private trelloService: TrelloApiService) { }

  ngOnInit() {
    this.cards = this.trelloService.getCardsList();
    this.cards.subscribe(x => this.loading = false);
  }
}
