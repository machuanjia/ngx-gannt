import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxGanntDataService {
  public data:[];
  constructor() {}
  init(data:[]) {
    this.data = data;
  }
}
