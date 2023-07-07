import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss'],
})
export class StatisticsListComponent implements OnInit, OnDestroy {
  battleData: Subject<string>;
  constructor(private statisticsService: StatisticsService) {}
  ngOnDestroy(): void {
    this.statisticsService.close();
  }

  ngOnInit(): void {
    this.statisticsService.connect();
   this.battleData = this.statisticsService.battleStatisticsMessage;
  }
}
