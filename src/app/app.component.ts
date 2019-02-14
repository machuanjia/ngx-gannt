import { Component, HostBinding } from "@angular/core";
import * as moment from "moment";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  @HostBinding("class.demo-wrap") isWrap = true;
  title = "ngx-gannt";
  public view = "task";
  public configuration = {
    type: "entities",
    view: "day"
  };
  dateOnChange(dates: { start: number; end: number }) {
    console.log(dates);
  }
}
