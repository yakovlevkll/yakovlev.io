import { getDictionary, IDictionaryGeneric, ITranslation } from "$plugins/i18n";

interface IDictionary<T> extends IDictionaryGeneric<T> {
  logIn: T;
}

const dictionary: IDictionary<ITranslation> = {
  logIn: {
    en: "Log in",
    ru: "Войти",
  },
};

export default getDictionary<IDictionary<string>>(dictionary);
