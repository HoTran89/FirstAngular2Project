import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { LayoutPage } from "./layoutPage";
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [LayoutPage],
    bootstrap: [LayoutPage]
})
export class AppModule { }
