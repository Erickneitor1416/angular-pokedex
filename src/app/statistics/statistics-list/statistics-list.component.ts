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
  dataList: any[] = [];

  addOrUpdate(id: number): void {
    var index = this.dataList.findIndex((item) => item.name === id.toString());
    if (index != -1) {
      this.dataList[index].value += 1;
    } else {
      this.dataList.push({
        name: id.toFixed(),
        value: 1,
      });
    }
  }

  constructor(private statisticsService: StatisticsService) {}
  ngOnDestroy(): void {
    this.statisticsService.close();
  }

  ngOnInit(): void {
    this.statisticsService.connect();
    /* this.battleData =  */
    this.statisticsService.battleStatisticsMessage$.subscribe((data) => {
      let dataObj = JSON.parse(data);
      this.addOrUpdate(dataObj.winner);
      this.dataList = [...this.dataList];
    });
  }
}
