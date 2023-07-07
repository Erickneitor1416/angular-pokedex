import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { webSocket } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private socket$: Subject<any> | undefined;
  public battleStatisticsMessage$ = new Subject<string>();
  constructor() {}
  public connect(): void {
    this.socket$ = this.getNewWebSocket();
    this.socket$.subscribe({
      next: (data: any) => {
        this.battleStatisticsMessage$.next(JSON.stringify(data));
      },
    });
  }
  public close() {
    this.socket$?.complete();
  }

  private getNewWebSocket() {
    return webSocket({
      url: environment.webSocketStatistics,
      openObserver: {
        next: () => console.log('Web socket conectado'),
      },
      closeObserver: {
        next: () => {
          console.log('Socket se ha cerrado');
          this.socket$ = undefined;
        },
      },
    });
  }
}
