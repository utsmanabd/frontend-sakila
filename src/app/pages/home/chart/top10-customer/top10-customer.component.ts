import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexGrid,
  ApexTitleSubtitle,
} from "ng-apexcharts";
import { ApiService } from 'src/app/services/api.service';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-top10-customer',
  templateUrl: './top10-customer.component.html',
  styleUrls: ['./top10-customer.component.css']
})
export class Top10CustomerComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  response: any;
  dataRentalCount: number[]= []
  dataCustomer: string[] = []

  constructor(private apiService: ApiService) {
    this.chartOptions = {
      series: [
        {
          name: "Rental Count",
          data: this.dataRentalCount
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: this.dataCustomer,
        labels: {
          style: {
            fontSize: "12px"
          }
        }
      },
      title: {
        text: 'Top 10 Customer',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold'
        }
      }
    };
  }

  ngOnInit(): void {
    this.getCountBySpecialFeatures()
  }

  getCountBySpecialFeatures() {
    this.apiService.getTopCustomer().subscribe(
      res => {
        this.response = res;

        for (const featureObj of this.response[0]) {
          this.dataCustomer.push(featureObj.first_name);
          this.dataRentalCount.push(featureObj.rental_count);
        }
        console.log(this.dataCustomer)
        console.log(this.dataRentalCount)
      },
      error => {
        console.error('Error fetching actor data:', error);
      }
    )
  }
}
