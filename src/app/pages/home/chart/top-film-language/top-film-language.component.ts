import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-top-film-language',
  templateUrl: './top-film-language.component.html',
  styleUrls: ['./top-film-language.component.css']
})
export class TopFilmLanguageComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        height: 300,
        width: 300,
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
