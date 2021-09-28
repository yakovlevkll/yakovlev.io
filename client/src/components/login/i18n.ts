import { getDictionary, IDictionaryGeneric, ITranslation } from "$plugins/i18n";

interface IDictionary<T> extends IDictionaryGeneric<T> {
  logIn: T;
  logInTo: T;
  email: T;
  password: T;
  rememberMe: T;
  forgot: T;
}

const dictionary: IDictionary<ITranslation> = {
  logIn: {
    en: "Log in",
    ru: "Войти",
  },
  logInTo: {
    en: "Log in to your account",
    ru: "Войти в аккаунт",
  },
  email: {
    en: "Email address",
    ru: "Электронная почта",
  },
  password: {
    en: "Password",
    ru: "Пароль",
  },
  rememberMe: {
    en: "Remember me",
    ru: "Запомнить меня",
  },
  forgot: {
    en: "Forgot your password?",
    ru: "Забыли пароль?",
  },
};

export default getDictionary<IDictionary<string>>(dictionary);
