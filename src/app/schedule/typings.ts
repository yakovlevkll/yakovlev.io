export interface ISchedulePage {
  region: string
  city: string
  time: string
  time_city: string
  emoji: string
  country: string
}

export interface ISchedulePages {
  [key: string]: ISchedulePage
}
