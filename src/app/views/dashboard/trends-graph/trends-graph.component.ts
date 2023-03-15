import { Component, OnInit } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { DashboardManagementService } from "../dashboard-management.service";

@Component({
  selector: "ngx-trends-graph",
  templateUrl: "./trends-graph.component.html",
  styleUrls: ["./trends-graph.component.scss"],
})
export class TrendsGraphComponent implements OnInit {
  //Trends Graph
  dataTrends: {};
  optionsTrends: any;
  themeSubscriptionTrends: any;

  dataAll: {};
  dataPreReq: {};
  dataPreRes: {};
  dataInEnhanceReq: {};
  dataInEnhanceRes: {};
  dataFinalEnhanceReq: {};
  dataFinalEnhanceRes: {};
  dataQueryReq: {};
  dataQueryRes: {};
  key: [];
  templateAll;
  templatePre: {};
  templateEnhance: {};
  templateQuery: {};

  private startDate;
  private endDate;

  constructor(
    private theme: NbThemeService,
    private dashboardService: DashboardManagementService
  ) {}

  ngOnInit(): void {
    let currentDate = new Date();

    this.endDate = currentDate.toJSON().split("T")[0];

    const sevenDaysAgo = new Date(currentDate); // create a new date object with the current date
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    this.startDate = sevenDaysAgo.toJSON().split("T")[0];

    this.fetchData();
  }

  fetchData() {
    this.dashboardService
      .fetchTrendGraphData(this.startDate, this.endDate)
      .subscribe((data: any) => {
        this.key = data.graph[0].claimCount
          .map((obj) => Object.keys(obj))
          .flat()
          .sort();
        this.filterDataForTabs(data);
      });
  }

  private filterDataForTabs(data) {
    data.graph.forEach((element) => {
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

      this.templatePre = {
        labels: this.key,
        datasets: this.templateAll.datasets.slice(0, 2),
      };

      this.templateEnhance = {
        labels: this.key,
        datasets: this.templateAll.datasets.slice(2, 6),
      };

      this.templateQuery = {
        labels: this.key,
        datasets: this.templateAll.datasets.slice(6, 8),
      };
    });
  }

  changeTab(e) {
    console.log(e);
  }
}
