import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { ApiService } from "src/app/services/api.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-film-distribution-by-category',
  templateUrl: './film-distribution-by-category.component.html',
  styleUrls: ['./film-distribution-by-category.component.css']
})
export class FilmDistributionByCategoryComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  response: any;
  dataFilmCount: number[]= []
  dataCategory: string[] = []

  constructor(private apiService: ApiService) {
    this.chartOptions = {
      series: this.dataFilmCount,
      chart: {
        height: 350,
        width: 350,
        type: "pie"
      },
      labels: this.dataCategory,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      title: {
        text: 'Film Distribution by Category',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold'
        }
      }
    };
  }

  ngOnInit(): void {
    this.getFilmDistributionByCategory()
  }

  getFilmDistributionByCategory() {
    this.apiService.getTotalFilmByCategoryPercentage().subscribe(
      (res) => {
        this.response = res;

        for (const featureObj of this.response[0]) {
          this.dataCategory.push(featureObj.category_name);
          this.dataFilmCount.push(featureObj.film_count);
        }
        console.log(this.dataCategory)
        console.log(this.dataFilmCount)
      },
      (error) => {
        console.error('Error fetching actor data:', error);
      }
    )
  }

}
