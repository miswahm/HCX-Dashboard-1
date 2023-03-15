import { Component, OnDestroy, OnInit } from "@angular/core";
import { TrafficBar, TrafficBarData } from "../../../@core/data/traffic-bar";
import { TrafficList, TrafficListData } from "../../../@core/data/traffic-list";
import { takeWhile } from "rxjs/operators";
import { DashboardManagementService } from "../dashboard-management.service";

@Component({
  selector: "ngx-claim-flow-week",
  styleUrls: ["../dashboard.component.scss"],
  template: `<nb-reveal-card [showToggleButton]="false" [revealed]="revealed">
    <nb-card-front>
      <nb-card size="small">
        <nb-claim-flow-front [frontCardData]="trafficListData">
        </nb-claim-flow-front>
        <nb-icon
          class="toggle-icon"
          icon="chevron-up-outline"
          pack="eva"
          (click)="toggleView()"
        ></nb-icon>
      </nb-card>
    </nb-card-front>
    <nb-card-back>
      <nb-card size="small">
        <nb-claim-flow-back
          [data]="temp.data"
          [labels]="temp.labels"
          [formatter]="temp.formatter"
        >
        </nb-claim-flow-back>
        <nb-icon
          class="toggle-icon"
          icon="chevron-down-outline"
          pack="eva"
          (click)="toggleView()"
        ></nb-icon>
      </nb-card>
    </nb-card-back>
  </nb-reveal-card>`,
})
export class ClaimFlowWeekComponent implements OnDestroy, OnInit {
  private alive = true;

  trafficBarData: TrafficBar;
  trafficListData: TrafficList | any;
  revealed = false;
  period: string = "week";

  startDate: string;
  endDate: string;

  temp;

  constructor(
    private trafficListService: TrafficListData,
    private trafficBarService: TrafficBarData,
    private dashboardService: DashboardManagementService
  ) {
    this.getTrafficFrontCardData(this.period);
    this.getTrafficBackCardData(this.period);
  }

  ngOnInit(): void {
    let currentDate = new Date();

    this.endDate = currentDate.toJSON().split("T")[0];

    const sevenDaysAgo = new Date(currentDate); // create a new date object with the current date
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    this.startDate = sevenDaysAgo.toJSON().split("T")[0];

    this.fetchData();
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;

    this.getTrafficFrontCardData(value);
    this.getTrafficBackCardData(value);
  }

  getTrafficBackCardData(period: string) {
    this.trafficBarService
      .getTrafficBarData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe((trafficBarData) => {
        // this.trafficBarData = trafficBarData;
      });
  }

  getTrafficFrontCardData(period: string) {
    this.trafficListService
      .getTrafficListData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe((trafficListData) => {
        this.trafficListData = trafficListData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  fetchData() {
    let successArr;
    let errorArr;
    let key;
    this.dashboardService
      .fetchSuccessErrorClaims(this.startDate, this.endDate)
      .subscribe((data: any) => {
        successArr = this.sortViaDate(data.graph[0].claimCount);
        errorArr = this.sortViaDate(data.graph[1].claimCount);
        key = data.graph[0].claimCount
          .map((obj) => Object.keys(obj))
          .flat()
          .sort();

        this.createGraphObject(successArr, errorArr, key);
      });
  }

  private getWeekNames(keys) {
    let names = [];

    keys.forEach((x) => {
      let date = new Date(x);
      switch (date.getDay()) {
        case 0:
          names.push("Sun");
          break;
        case 1:
          names.push("Mon");
          break;
        case 2:
          names.push("Tue");
          break;
        case 3:
          names.push("Wed");
          break;
        case 4:
          names.push("Thu");
          break;
        case 5:
          names.push("Fri");
          break;
        case 6:
          names.push("Sat");
          break;
      }
    });

    return names;
  }

  private addArrays(arr1, arr2) {
    let sum = [];

    for (let i = 0; i < arr1.length; i++) {
      sum.push(arr1[i] + arr2[i]);
    }

    return sum;
  }

  private createGraphObject(successArr, errorArr, keys) {
    const namesOfDay = this.getWeekNames(keys);
    const values = this.addArrays(successArr, errorArr);

    let barObj = {
      data: values,
      labels: namesOfDay,
      formatter: "{c0} Claims",
    };

    console.log(barObj);
    this.temp = barObj;

    let obj = [];

    for (let i = 1; i < values.length; i++) {
      let o = {
        date: namesOfDay[i],
        value: values[i],
        delta: {
          up: values[i] > values[i - 1] ? true : false,
          value: values[i] - values[i - 1],
        },
      };
      obj.push(o);
    }

    this.trafficListData = obj;
  }

  private sortViaDate(claimCount) {
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
}
