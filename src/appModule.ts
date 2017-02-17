import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { LayoutPage } from "./layoutPage";
import { AppRoute } from "./appRoute";
import { Overview } from "./modules/overview/overview";
import { Members } from "./modules/members/members";
import { Activity } from "./modules/activity/activity";
import { Setting } from "./modules/setting/setting";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoute],
    declarations: [LayoutPage, Overview, Members, Activity, Setting],
    bootstrap: [LayoutPage]
})

export class AppModule { }
