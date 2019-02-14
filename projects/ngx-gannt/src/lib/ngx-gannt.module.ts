import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgxGanntComponent } from "./ngx-gannt.component";

@NgModule({
  declarations: [NgxGanntComponent],
  imports: [DragDropModule],
  exports: [NgxGanntComponent]
})
export class NgxGanntModule {}
