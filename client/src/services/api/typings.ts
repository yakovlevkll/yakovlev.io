export interface ISchedulePage {
  region: string
  city: string
  time: string
  emoji: string
}

export interface ISchedulePages {
  [key: string]: ISchedulePage
}
