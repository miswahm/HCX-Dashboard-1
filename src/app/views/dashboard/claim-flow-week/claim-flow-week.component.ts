import { Component, OnDestroy, OnInit } from "@angular/core";
import { TrafficBar, TrafficBarData } from "../../../@core/data/traffic-bar";
import { TrafficList, TrafficListData } from "../../../@core/data/traffic-list";
import { takeWhile } from "rxjs/operators";

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
        <nb-claim-flow-back [trafficBarData]="trafficBarData">
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
export class ClaimFlowWeekComponent implements OnDestroy {
  private alive = true;

  trafficBarData: TrafficBar;
  trafficListData: TrafficList;
  revealed = false;
  period: string = "week";

  constructor(
    private trafficListService: TrafficListData,
    private trafficBarService: TrafficBarData
  ) {
    this.getTrafficFrontCardData(this.period);
    this.getTrafficBackCardData(this.period);
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
        this.trafficBarData = trafficBarData;
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
}
