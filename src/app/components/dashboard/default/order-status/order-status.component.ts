import { Component, OnInit } from '@angular/core';
import { OrderStatusComponent1 } from './../../../../shared/data/widget/chart';
import * as chartData from '../../../../shared/data/widget/chart';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  constructor(private orderStatus: OrderStatusComponent1) {}

  ngOnInit(): void {
    this.orderStatus.catInstitucionesByJovenes(); // Llamar el método para obtener datos
  }

  public progress = chartData.progress;
  public progress1 = chartData.progress1;
  public progress2 = chartData.progress2;
  public progress3 = chartData.progress3;
  public progress4 = chartData.progress4;
}
