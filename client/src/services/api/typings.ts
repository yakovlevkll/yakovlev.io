export interface ISchedulePage {
    region: string
    city: string
}

export interface ISchedulePages {
    [key: string]: ISchedulePage
}