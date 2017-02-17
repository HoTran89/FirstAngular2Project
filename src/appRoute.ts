import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Overview } from "./modules/overview/overview";
import { Members } from "./modules/members/members";
import { Activity } from "./modules/activity/activity";
import { Setting } from "./modules/setting/setting";

let routes: Routes = [
    { path: "", redirectTo: "overview", pathMatch: "full" },
    { path: "overview", component: Overview },
    { path: "members", component: Members },
    { path: "activity", component: Activity },
    { path: "setting", component: Setting }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoute { }