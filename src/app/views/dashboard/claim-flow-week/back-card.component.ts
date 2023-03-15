import { AfterViewInit, Component, Input, OnChanges } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "nb-claim-flow-back",
  styleUrls: ["../dashboard.component.scss"],
  template: `<nb-card-body>
    <div
      style="max-height: 280px"
      echarts
      [options]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  </nb-card-body>`,
})
export class ClaimFlowBackComponent implements AfterViewInit, OnChanges {
  private alive = true;

  @Input() trafficBarData: any;

  currentTheme: string;

  @Input() data: number[];
  @Input() labels: string[];
  @Input() formatter: string;

  option: any = {};
  echartsInstance: any;

  constructor(private themeService: NbThemeService) {
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe((theme) => {
        this.currentTheme = theme.name;
      });
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  ngOnChanges(changes): void {
    // if (!changes.data.isFirstChange() && !changes.labels.isFirstChange()) {
    //   this.echartsInstance.setOption({
    //     series: [
    //       {
    //         data: this.data,
    //       },
    //     ],
    //     xAxis: {
    //       data: this.labels,
    //     },
    //     tooltip: {
    //       formatter: this.formatter,
    //     },
    //   });
    // }
  }

  ngAfterViewInit() {
    // this.data = this.trafficBarData.data;
    // this.labels = this.trafficBarData.labels;
    // this.formatter = this.trafficBarData.formatter;

    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe((config) => {
        const trafficTheme: any = config.variables.trafficBarEchart;

        this.option = Object.assign(
          {},
          {
            grid: {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              containLabel: true,
            },
            xAxis: {
              type: "category",
              data: this.labels,
              axisLabel: {
                color: trafficTheme.axisTextColor,
                fontSize: trafficTheme.axisFontSize,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
            },
            yAxis: {
              show: false,
              axisLine: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              boundaryGap: [0, "5%"],
            },
            tooltip: {
              axisPointer: {
                type: "shadow",
              },
              textStyle: {
                color: trafficTheme.tooltipTextColor,
                fontWeight: trafficTheme.tooltipFontWeight,
                fontSize: 16,
              },
              position: "top",
              backgroundColor: trafficTheme.tooltipBg,
              borderColor: trafficTheme.tooltipBorderColor,
              borderWidth: 1,
              formatter: this.formatter,
              extraCssText: trafficTheme.tooltipExtraCss,
            },
            series: [
              {
                type: "bar",
                barWidth: "40%",
                data: this.data,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: trafficTheme.gradientFrom,
                      },
                      {
                        offset: 1,
                        color: trafficTheme.gradientTo,
                      },
                    ]),
                    opacity: 1,
                    shadowColor: trafficTheme.gradientFrom,
                    shadowBlur: trafficTheme.shadowBlur,
                  },
                },
              },
            ],
          }
        );
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
