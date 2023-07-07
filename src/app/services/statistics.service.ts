import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { webSocket } from 'rxjs/webSocket';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private socket: Subject<any>;
  public battleStatisticsMessage = new Subject<string>();
  constructor() {}
  public connect(): void {
    this.socket = this.getNewWebSocket();
    this.socket.subscribe({
      next: (data: any) => {
        this.battleStatisticsMessage.next(JSON.stringify(data))
      },
    });
  }
  public close() {
    this.socket.complete();
  }
  private getNewWebSocket() {
    return webSocket(environment.webSocketStatistics);
  }
}
