const BASELANG = 'ru'

export interface ITranslation {
  [BASELANG]: string
  en?: string
  fr?: string
}

export interface IDictionaryGeneric<T> {
  [key: string]: IDictionaryGeneric<T> | T
}

export interface TDictionary<T, V> {
  [key: string]: V | T
}

function isTranslation(
  toBeDetermined: IDictionaryGeneric<ITranslation> | ITranslation
): toBeDetermined is ITranslation {
  return BASELANG in toBeDetermined
}

export function getDictionary<T>(
  dictionary: IDictionaryGeneric<ITranslation>,
  lang: keyof ITranslation = BASELANG
): T {
  return Object.fromEntries(
    Object.entries(dictionary).map(([key, val]) => {
      if (isTranslation(val)) {
        return [key, lang in val ? val[lang] : val[BASELANG]]
      } else {
        return [key, getDictionary(val, lang)]
      }
    })
  )
}

interface IDictionary<T> extends IDictionaryGeneric<T> {
  subscribeToNews: {
    wantIt: T
    subscribe: T
    emailLabel: T
    emailPlaceholder: T
    btn: T
  }
  socials: {
    twitter: {
      name: T
      link: T
    }
    instagram: {
      name: T
      link: T
    }
    telegram: {
      name: T
      link: T
    }
  }
  project: {
    name: T
    year: T
    copyright: T
    motto: T
  }
  notFound: {
    title: T
    desc: T
  }
}

const dictionary: IDictionary<ITranslation> = {
  subscribeToNews: {
    wantIt: {
      en: 'Want product news and updates?',
      ru: 'Хотите первыми узнавать о крутых акциях и новых предложениях?',
    },
    subscribe: {
      en: 'Sign up for our newsletter.',
      ru: 'Подпишитесь на наc.',
    },
    emailLabel: {
      en: 'Email address',
      ru: 'Электронная почта',
    },
    emailPlaceholder: {
      en: 'johndoe@mail.com',
      ru: 'email@pochta.ru',
    },
    btn: {
      en: 'Notify me',
      ru: 'Подписаться',
    },
  },
  socials: {
    twitter: {
      name: {
        en: 'Twitter',
        ru: 'Твиттер',
      },
      link: {
        en: 'https://twitter.com',
        ru: 'https://twitter.com',
      },
    },
    instagram: {
      name: {
        en: 'Instagram',
        ru: 'Инстаграм',
      },
      link: {
        en: 'https://instagram.com',
        ru: 'https://instagram.com',
      },
    },
    telegram: {
      name: {
        en: 'Telegram',
        ru: 'Телеграм',
      },
      link: {
        en: 'tg://durov',
        ru: 'tg://durov',
      },
    },
  },
  project: {
    name: {
      en: 'Shoppie',
      ru: 'Shoppie',
    },
    year: {
      ru: '2021',
    },
    copyright: {
      en: 'All rights reserved',
      ru: 'Все права защищены',
    },
    motto: {
      ru: 'Самый вдохновляющий слоган.',
      en: 'Making the world a better place through constructing elegant hierarchies.',
    },
  },
  notFound: {
    title: {
      en: 'Page not found',
      ru: 'Страница не найдена',
    },
    desc: {
      en: 'Please use the menu for proper navigation',
      ru: 'Попробуйте воспользоваться меню для комфортной работы',
    },
  },
}

export default getDictionary<IDictionary<string>>(dictionary)
