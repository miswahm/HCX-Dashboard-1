import { Routes } from "@angular/router";
import { ViewsComponent } from "./views.component";

const routes: Routes = [
  {
    path: "",
    component: ViewsComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "trend-analysis",
        loadChildren: () =>
          import("./trend-analysis/trend-analysis.module").then(
            (m) => m.TrendAnalysisModule
          ),
      },
      {
        path: "claims",
        loadChildren: () =>
          import("./claims/claims.module").then((m) => m.ClaimsModule),
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
];
