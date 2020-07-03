import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from '../../services/websocket.service';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit, OnDestroy {

  socketSubscrition: Subscription;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81], label: 'Series A' }
  ];
  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril'];

  constructor(
    private wsService: WebsocketService,

    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getData();
    this.socketSubscrition = this.wsService.listen('grafica-actualizada').subscribe((data: any) => this.lineChartData = data);
  }

  ngOnDestroy(): void {
    this.socketSubscrition.unsubscribe();
  }

  getData(): void {
    this.http
      .get('http://localhost:5000/graficas')
      .subscribe( (data: any) => this.lineChartData = data );
  }

}
