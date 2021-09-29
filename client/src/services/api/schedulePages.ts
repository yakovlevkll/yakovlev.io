import { ISchedulePages } from './typings'

const pages: ISchedulePages = {
  moscow: {
    region: 'Europe',
    city: 'Moscow',
    time: 'GMT+3',
    emoji: '🇷🇺',
    country: 'Russia',
  },
  almaty: {
    region: 'Asia',
    city: 'Almaty',
    time: 'GMT+6',
    emoji: '🇰🇿',
    country: 'Kazakhstan',
  },
  dubai: {
    region: 'Asia',
    city: 'Dubai',
    time: 'GMT+4',
    emoji: '🇦🇪',
    country: 'UAE',
  },
  barcelona: {
    region: 'Europe',
    city: 'Barcelona',
    time: 'GMT+2',
    emoji: '🇪🇸',
    country: 'Spain',
  },
  tallinn: {
    region: 'Europe',
    city: 'Tallinn',
    time: 'GMT+2',
    emoji: '🇪🇪',
    country: 'Estonia',
  },
  toronto: {
    region: 'America',
    city: 'Toronto',
    time: 'GMT-4',
    emoji: '🇨🇦',
    country: 'Canada',
  },
}

export default pages
