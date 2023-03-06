import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewsComponent } from "./views.component";
import { ThemeModule } from "../@theme/theme.module";
import { NbMenuModule } from "@nebular/theme";
import { MiscellaneousModule } from "../pages/miscellaneous/miscellaneous.module";

@NgModule({
  declarations: [ViewsComponent],
  imports: [CommonModule, ThemeModule, NbMenuModule, MiscellaneousModule],
})
export class ViewsModule {}
