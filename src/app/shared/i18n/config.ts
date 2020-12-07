import {enUS, es, ja} from 'date-fns/locale';

/// Allowed languages involve 2 things:
/// - Key: name of the translation file
/// - Value: locale variable for UI library
export const I18nConfig: any = {
  defaultLanguage: 'en',
  allowedLanguages: {
    es,
    en: enUS,
  }
};
