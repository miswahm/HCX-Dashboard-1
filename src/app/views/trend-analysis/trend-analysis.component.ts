import { Component, OnInit } from "@angular/core";
import { NbColorHelper, NbDateService, NbThemeService } from "@nebular/theme";
import { TrendsManagementService } from "./trends-management.service";
import { GraphHelperService } from "./graph-helper.service";

@Component({
  selector: "ngx-trend-analysis",
  templateUrl: "./trend-analysis.component.html",
  styleUrls: ["./trend-analysis.component.scss"],
})
export class TrendAnalysisComponent implements OnInit {
  min: Date;
  max: Date;

  //Trends Graph
  dataTrends: {};
  optionsTrends: any;
  themeSubscriptionTrends: any;

  //Success to error Graph
  dataS2E: any;
  optionsS2E: any;
  themeSubscriptionS2E: any;
  apiResponse: any;

  //Hospital Claims Flow
  optionsHospital: any = {};
  themeSubscriptionHospital: any;

  private startDate;
  private endDate;

  constructor(
    protected dateService: NbDateService<Date>,
    private theme: NbThemeService,
    private trendsService: TrendsManagementService,
    private graphHeloper: GraphHelperService
  ) {}

  ngOnInit(): void {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);

    let currentDate = new Date();

    this.endDate = currentDate.toJSON().split("T")[0];

    const sevenDaysAgo = new Date(currentDate); // create a new date object with the current date
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    this.startDate = sevenDaysAgo.toJSON().split("T")[0];

    this.setSuccessfulToErrorGraph();
    this.setHospitalGraph();
  }

  setSuccessfulToErrorGraph() {
    this.trendsService
      .fetchSuccessErrorClaims(this.startDate, this.endDate)
      .subscribe((data) => {
        this.apiResponse = data;

        const successArray = this.graphHeloper.remodelArray(
          this.apiResponse.graph[0].claimCount
        );
        const errorArray = this.graphHeloper.remodelArray(
          this.apiResponse.graph[1].claimCount
        );

        const keys = this.apiResponse.graph[0].claimCount
          .map((obj) => Object.keys(obj))
          .flat()
          .sort();

        this.themeSubscriptionS2E = this.theme
          .getJsTheme()
          .subscribe((config) => {
            const colors: any = config.variables;
            const chartjs: any = config.variables.chartjs;

            this.dataS2E = {
              labels: keys,
              datasets: [
                {
                  data: successArray,
                  label: "Success",
                  backgroundColor: NbColorHelper.hexToRgbA("#00FF00", 0.8),
                },
                {
                  data: errorArray,
                  label: "Error",
                  backgroundColor: NbColorHelper.hexToRgbA("#FF0000", 0.8),
                },
              ],
            };

            this.optionsS2E = {
              maintainAspectRatio: false,
              responsive: true,
              legend: {
                labels: {
                  fontColor: chartjs.textColor,
                },
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                      color: chartjs.axisLineColor,
                    },
                    ticks: {
                      fontColor: chartjs.textColor,
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: true,
                      color: chartjs.axisLineColor,
                    },
                    ticks: {
                      fontColor: chartjs.textColor,
                    },
                  },
                ],
              },
            };
          });
      });
  }

  setHospitalGraph() {
    this.themeSubscriptionHospital = this.theme
      .getJsTheme()
      .subscribe((config) => {
        const colors: any = config.variables;
        const echarts: any = config.variables.echarts;

        this.optionsHospital = {
          backgroundColor: echarts.bg,
          color: [colors.primaryLight],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              axisTick: {
                alignWithLabel: true,
              },
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              splitLine: {
                lineStyle: {
                  color: echarts.splitLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          series: [
            {
              name: "Score",
              type: "bar",
              barWidth: "60%",
              data: [10, 52, 200, 334, 390, 330, 220],
            },
          ],
        };
      });
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
