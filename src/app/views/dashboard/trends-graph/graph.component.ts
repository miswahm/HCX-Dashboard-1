import { Component, Input } from "@angular/core";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "nb-trend-graph",
  styleUrls: ["./trends-graph.component.scss"],
  template: ` <chart
    style="min-height: 400px"
    type="line"
    [data]="dataTrends"
    [options]="optionsTrends"
  ></chart>`,
})
export class NbGraphComponent {
  @Input() dataTrends;

  optionsTrends;

  constructor(private theme: NbThemeService) {
    this.theme.getJsTheme().subscribe((config) => {
      const chartjs: any = config.variables.chartjs;
      this.optionsTrends = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "top",
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
                labelString: "Date",
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
}
