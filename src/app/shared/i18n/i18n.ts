import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {NZ_I18N, NzI18nService} from 'ng-zorro-antd/i18n';
import {enUS, ja} from 'date-fns/locale';
import {Injectable} from '@angular/core';

export abstract class I18n {
  static init(): void {
    registerLocaleData(en);
  }

  abstract changeLanguage(): void;

  abstract translate(key: string): string;
}

@Injectable()
export class I18nAntDesign implements I18n {
  constructor(private i18n: NzI18nService) {
  }

  static getGlobalConfiguration(): any {
    return [{provide: NZ_I18N, useValue: enUS}, {provide: NZ_I18N, useValue: enUS}];
  }

  changeLanguage(): void {
    this.i18n.setDateLocale(ja);
  }

  translate(key: string): string {
    return this.i18n.translate(key);
  }
}
