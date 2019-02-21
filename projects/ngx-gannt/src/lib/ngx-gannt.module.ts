import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgxGanntComponent } from "./ngx-gannt.component";
import { NgxGanntArticleComponent } from './article/ngx-gannt-article.component';
import { NgxGanntAsideComponent } from './aside/ngx-gannt-aside.component';
import {BrowserModule} from '@angular/platform-browser';
import { NgxGanntScrollDirective } from './ngx-gannt.directive';
@NgModule({
  declarations: [
    NgxGanntComponent,
    NgxGanntAsideComponent,
    NgxGanntArticleComponent,
    NgxGanntScrollDirective
  ],
  imports: [BrowserModule,DragDropModule],
  exports: [NgxGanntComponent]
})
export class NgxGanntModule {}
