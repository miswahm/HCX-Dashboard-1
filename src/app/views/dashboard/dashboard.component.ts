import { Component, OnInit } from "@angular/core";
import { NbThemeService, NbColorHelper } from "@nebular/theme";
import { LayoutService } from "../../@core/utils";


@Component({
  selector: "ngx-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;
  themeSubscription: any;
  chartData: number[];

  //Providers Graphs
  multi = [
    {
      name: "Germany",
      series: [
        {
          name: "17",
          value: 20,
        },
        {
          name: "18",
          value: 25,
        },
        {
          name: "19",
          value: 30,
        },
        {
          name: "20",
          value: 20,
        },
        {
          name: "21",
          value: 25,
        },
        {
          name: "22",
          value: 40,
        },
        {
          name: "23",
          value: 10,
        },
      ],
    },
  ];
  showLegend = false;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = "Days";
  showYAxisLabel = true;
  yAxisLabel = "Number of Providers";
  colorScheme: any;

  //Trends Graph
  dataTrends: {};
  optionsTrends: any;
  themeSubscriptionTrends: any;

  constructor(
    private theme: NbThemeService,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.setUpLineMap();
    this.setUpProvidersGraph();
    this.setTrendsGraph();
  }

  setUpProvidersGraph() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [
          colors.primaryLight,
          colors.infoLight,
          colors.successLight,
          colors.warningLight,
          colors.dangerLight,
        ],
      };
    });
  }

  setUpLineMap() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: "Series A",
            backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
            borderColor: colors.primary,
          },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
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
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  setTrendsGraph() {
    this.themeSubscriptionTrends = this.theme
      .getJsTheme()
      .subscribe((config) => {
        const colors: any = config.variables;
        const chartjs: any = config.variables.chartjs;

        this.dataTrends = {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "dataset - big points",
              data: [
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
              ],
              borderColor: colors.primary,
              backgroundColor: colors.primary,
              fill: false,
              borderDash: [5, 5],
              pointRadius: 8,
              pointHoverRadius: 10,
            },
            {
              label: "dataset - individual point sizes",
              data: [
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
              ],
              borderColor: colors.dangerLight,
              backgroundColor: colors.dangerLight,
              fill: false,
              borderDash: [5, 5],
              pointRadius: 8,
              pointHoverRadius: 10,
            },
            {
              label: "dataset - large pointHoverRadius",
              data: [
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
              ],
              borderColor: colors.info,
              backgroundColor: colors.info,
              fill: false,
              pointRadius: 8,
              pointHoverRadius: 10,
            },
            {
              label: "dataset - large pointHitRadius",
              data: [
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
              ],
              borderColor: colors.success,
              backgroundColor: colors.success,
              fill: false,
              pointRadius: 8,
              pointHoverRadius: 10,
            },
          ],
        };

        this.optionsTrends = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: "bottom",
            labels: {
              fontColor: chartjs.textColor,
            },
          },
          hover: {
            mode: "index",
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
                gridLines: {
                  display: true,
                  color: chartjs.axisLineColor,
                },
                ticks: {
                  fontColor: chartjs.textColor,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Value",
                },
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
  }

  private random() {
    return Math.round(Math.random() * 100);
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.themeSubscriptionTrends.unsubscribe();
  }
}
