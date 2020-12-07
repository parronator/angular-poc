import {NZ_I18N, NzI18nService} from 'ng-zorro-antd/i18n';
import {Injectable} from '@angular/core';
import {TranslateLoader, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {I18nConfig} from './config';

// AoT requires an exported function for factories
export const HttpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

export abstract class I18n {
  static getDefaultConfiguration(): any {
    return {
      defaultLanguage: I18nConfig.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    };
  }

  abstract changeLanguage(language: string): void;

  abstract getCurrentLanguage(): string;

  abstract getAllowedLanguages(): string;

  abstract translate(key: string): string;
}

@Injectable()
export class I18nService implements I18n {
  constructor(private i18nAntDesign: NzI18nService, private i18nNgx: TranslateService) {
    i18nNgx.setDefaultLang(I18nConfig.defaultLanguage);
    i18nNgx.use(I18nConfig.defaultLanguage);
  }

  static getGlobalConfiguration(): any {
    return [{provide: NZ_I18N, useValue: I18nConfig.allowedLanguages[I18nConfig.defaultLanguage]}];
  }

  changeLanguage(language: string): void {
    this.i18nAntDesign.setDateLocale(I18nConfig.allowedLanguages[language]);
    this.i18nNgx.use(language);
  }

  getCurrentLanguage(): string {
    return this.i18nNgx.currentLang;
  }

  getAllowedLanguages(): any {
    return Object.keys(I18nConfig.allowedLanguages);
  }

  translate(key: string): string {
    return this.i18nNgx.instant(key);
  }
}

