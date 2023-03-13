import { Component, Input, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
import { TrafficList } from "../../../@core/data/traffic-list";

@Component({
  selector: "nb-claim-flow-front",
  styleUrls: ["../dashboard.component.scss"],
  template: `<nb-list>
    <nb-list-item
      class="item"
      *ngFor="let item of frontCardData; trackBy: trackByDate"
    >
      <span>{{ item.date }}</span>
      <span>{{ item.value }}</span>
      <span
        class="delta"
        [class.up]="item.delta.up"
        [class.down]="!item.delta.up"
      >
        <nb-icon
          [icon]="item.delta.up ? 'arrow-up' : 'arrow-down'"
          pack="eva"
        ></nb-icon>
        {{ item.delta.value }}%
      </span>
    </nb-list-item>
  </nb-list>`,
})
export class ClaimFlowFrontComponent implements OnDestroy {
  private alive = true;

  @Input() frontCardData: TrafficList;

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe((theme) => {
        this.currentTheme = theme.name;
      });
  }

  trackByDate(_, item) {
    return item.date;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
