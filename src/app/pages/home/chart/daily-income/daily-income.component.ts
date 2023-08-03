import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { ApiService } from "src/app/services/api.service";
import { format } from "date-fns";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-daily-income',
  templateUrl: './daily-income.component.html',
  styleUrls: ['./daily-income.component.css']
})
export class DailyIncomeComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  response: any
  dataIncome: number[] = []
  dataDays: string[] = []

  constructor(private apiService: ApiService) {
    this.chartOptions = {
      series: [
        {
          name: "Income",
          data: this.dataIncome
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Daily Income",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.dataDays
      }
    };
  }

  ngOnInit(): void {
    this.getDailyIncome()
  }

  getDailyIncome() {
    this.apiService.getDailyIncome().subscribe(
      (res) => {
        this.response = res;

        for (const featureObj of this.response[0]) {
          this.dataDays.push(format(new Date(featureObj.transaction_date), 'MMMM dd yyyy'));
          this.dataIncome.push(featureObj.total_daily_income);
        }
        console.log(this.dataDays)
        console.log(this.dataIncome)
      },
      (error) => {
        console.error('Error fetching actor data:', error);
      }
    )
  }
}
