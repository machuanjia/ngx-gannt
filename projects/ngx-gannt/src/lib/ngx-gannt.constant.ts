export enum NgxGanntScalesType {
  day = 0,
  week = 1,
  month = 2
}

export const NgxGanntDifferUnit = ['days','weeks','months'];

export const NgxGanntViewTypes = {
  task: 0,
  member: 1
};

export interface NgxGanttConfig {
  view: number;
  date_type: number; // 日 周 月
  isGroup?: boolean;
  isPager?: boolean;
  pagerSize?: number;
  pagerMemberSize?: number;
}
