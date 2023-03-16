import { Component, OnInit } from "@angular/core";
import { TrendsManagementService } from "../trends-management.service";
import { NbThemeService } from "@nebular/theme";
import { FormControl } from "@angular/forms";

@Component({
  selector: "ngx-overall-graph",
  templateUrl: "./overall-graph.component.html",
  styleUrls: ["./overall-graph.component.scss"],
})
export class OverallGraphComponent implements OnInit {
  startDate;
  endDate;
  categories: any[] = [
    { view: "All", value: "all" },
    { view: "Pre Auth Request", value: "preauth_request" },
    { view: "Pre Auth Response", value: "preauth_response" },
    {
      view: "Interim Enhancement Request",
      value: "interim_enhancement_request",
    },
    {
      view: "Interim Enhancement Response",
      value: "interim_enhancement_response",
    },
    { view: "Final Enhancement Request", value: "final_enhancement_request" },
    { view: "Final Enhancement Response", value: "final_enhancement_response" },
    { view: "Query Request", value: "query_request" },
    { view: "Query Response", value: "query_response" },
  ];

  dataAll: {};
  dataPreReq;
  dataPreRes: {};
  dataInEnhanceReq: {};
  dataInEnhanceRes: {};
  dataFinalEnhanceReq;
  dataFinalEnhanceRes;
  dataQueryReq: {};
  dataQueryRes: {};
  key: [];
  templateAll;

  optionsTrends;

  selectedCategory = "all";

  selectedStartDate = new FormControl();
  selectedEndDate = new FormControl();

  lengthOfData: number = 0;

  //Total Claims Graph
  optionsClaims: any = {};
  themeSubscriptionClaims: any;
  totalClaims: number = 0;

  constructor(
    private trendsService: TrendsManagementService,
    private theme: NbThemeService
  ) {}

  ngOnInit(): void {
    let currentDate = new Date();

    this.endDate = currentDate.toJSON().split("T")[0];

    const sevenDaysAgo = new Date(currentDate); // create a new date object with the current date
    sevenDaysAgo.setDate(currentDate.getDate() - 6);

    this.startDate = sevenDaysAgo.toJSON().split("T")[0];

    this.selectedEndDate.setValue(currentDate.toJSON());
    this.fetchData(this.startDate, this.endDate, "all");
  }

  fetchData(startDate, endDate, category) {
    this.resetGraph();
    this.trendsService
      .fetchTrendGraphData(startDate, endDate, category)
      .subscribe((data) => {
        this.totalClaims = data.totalNoOfClaims;
        this.dataAll = data;
        this.key = data.graph[0].claimCount
          .map((obj) => Object.keys(obj))
          .flat()
          .sort();
        this.filterDataForTabs(data);
        this.setOptions();
      });
  }

  setOptions() {
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

  private filterDataForTabs(data) {
    data.graph.forEach((element) => {
      this.lengthOfData++;
      switch (element.category) {
        case "preauth_request":
          this.dataPreReq = this.SortViaDate(element.claimCount);
          break;
        case "preauth_response":
          this.dataPreRes = this.SortViaDate(element.claimCount);
          break;
        case "interim_enhancement_request":
          this.dataInEnhanceReq = this.SortViaDate(element.claimCount);
          break;
        case "interim_enhancement_response":
          this.dataInEnhanceRes = this.SortViaDate(element.claimCount);
          break;
        case "final_enhancement_request":
          this.dataFinalEnhanceReq = this.SortViaDate(element.claimCount);
          break;
        case "final_enhancement_response":
          this.dataFinalEnhanceRes = this.SortViaDate(element.claimCount);
          break;
        case "query_request":
          this.dataQueryReq = this.SortViaDate(element.claimCount);
          break;
        case "query_response":
          this.dataQueryRes = this.SortViaDate(element.claimCount);
          break;
      }
    });

    this.setTemplates();
  }

  private SortViaDate(claimCount) {
    const sortedValues = claimCount
      .sort((a, b) => {
        // sort in ascending date order
        const dateA: any = new Date(Object.keys(a)[0]);
        const dateB: any = new Date(Object.keys(b)[0]);
        return dateA - dateB;
      })
      .map((obj) => Object.values(obj)[0]);

    return sortedValues;
  }

  setTemplates() {
    this.theme.getJsTheme().subscribe((config) => {
      const colors: any = config.variables;

      this.templateAll = {
        labels: this.key,
        datasets: [
          {
            label: "Pre Auth Request",
            data: this.dataPreReq,
            borderColor: colors.primary,
            backgroundColor: colors.primary,
            fill: false,
            borderDash: [5, 5],
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: "Pre Auth Response",
            data: this.dataPreRes,
            borderColor: colors.dangerLight,
            backgroundColor: colors.dangerLight,
            fill: false,
            borderDash: [5, 5],
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: "Interim Enhancement Request",
            data: this.dataInEnhanceReq,
            borderColor: colors.info,
            backgroundColor: colors.info,
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: "Interim Enhancement Response",
            data: this.dataInEnhanceRes,
            borderColor: colors.success,
            backgroundColor: colors.success,
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: "Final Enhancement Request",
            data: this.dataFinalEnhanceReq,
            borderColor: colors.danger,
            backgroundColor: colors.danger,
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: "Final Enhancement Response",
            data: this.dataFinalEnhanceRes,
            borderColor: colors.warning,
            backgroundColor: colors.warning,
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: "Query Request",
            data: this.dataQueryReq,
            borderColor: colors.info,
            backgroundColor: colors.info,
            borderDash: [5, 5],
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          },
          {
            label: "Query Response",
            data: this.dataQueryRes,
            borderColor: "#598bff",
            backgroundColor: "#598bff",
            fill: false,
            pointRadius: 8,
            pointHoverRadius: 10,
          },
        ],
      };
    });

    this.setTotalClaimsGraph();
  }

  filterCategory(e) {
    this.fetchData(this.startDate, this.endDate, e);
    this.selectedCategory = e;
  }

  filterDate(e, type) {
    if (type == "start") {
      this.selectedStartDate.setValue(e);
      this.startDate = this.offsetTimeZone(e);
    } else {
      this.selectedEndDate.setValue(e);
      this.endDate = this.offsetTimeZone(e);
    }

    if (this.selectedStartDate.value && this.selectedEndDate.value) {
      this.fetchData(
        this.offsetTimeZone(this.selectedStartDate.value),
        this.offsetTimeZone(this.selectedEndDate.value),
        this.selectedCategory != undefined ? this.selectedCategory : "all"
      );
    }
  }

  offsetTimeZone(date) {
    let formatedDate = date.toJSON();
    //offset the date value set by ISO format
    let temp = new Date(formatedDate);
    let offset = temp.getTimezoneOffset();
    let newDateObj = new Date(temp.getTime() - offset * 60 * 1000);
    //assigning the new offset value to formateDate
    formatedDate = newDateObj.toJSON().split("T")[0];

    return formatedDate;
  }

  getTotalClaimsArry() {
    let arr = [];

    switch (this.selectedCategory) {
      case "all":
        for (let i = 0; i < this.lengthOfData; i++) {
          arr.push(
            this.dataPreReq[i] +
              this.dataPreRes[i] +
              this.dataInEnhanceReq[i] +
              this.dataInEnhanceRes[i] +
              this.dataFinalEnhanceReq[i] +
              this.dataFinalEnhanceRes[i] +
              this.dataQueryReq[i] +
              this.dataQueryRes[i]
          );
        }
        break;
      case "preauth_request":
        return this.dataPreReq;
        break;
      case "preauth_response":
        return this.dataPreRes;
        break;
      case "interim_enhancement_request":
        return this.dataInEnhanceReq;
        break;
      case "interim_enhancement_response":
        return this.dataInEnhanceRes;
        break;
      case "final_enhancement_request":
        return this.dataFinalEnhanceReq;
        break;
      case "final_enhancement_response":
        return this.dataFinalEnhanceRes;
        break;
      case "query_request":
        return this.dataQueryReq;
        break;
      case "query_response":
        return this.dataQueryRes;
        break;
    }

    return arr;
  }

  setTotalClaimsGraph() {
    this.themeSubscriptionClaims = this.theme
      .getJsTheme()
      .subscribe((config) => {
        const colors: any = config.variables;
        const echarts: any = config.variables.echarts;

        this.optionsClaims = {
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
              data: this.key,
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
              data: this.getTotalClaimsArry(),
            },
          ],
        };
      });
  }

  resetGraph() {
    this.key = [];
    this.dataAll = null;
    this.dataPreReq = null;
    this.dataPreRes = null;
    this.dataInEnhanceReq = null;
    this.dataInEnhanceRes = null;
    this.dataFinalEnhanceReq = null;
    this.dataFinalEnhanceRes = null;
    this.dataQueryReq = null;
    this.dataQueryRes = null;
    this.templateAll = null;
    this.optionsClaims = [];
  }
}
