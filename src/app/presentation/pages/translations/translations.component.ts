import {Component, OnInit} from '@angular/core';
import {I18n} from '../../../shared/i18n/i18n';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.scss']
})
export class TranslationsComponent {

  public language: string;

  constructor(public i18n: I18n) {
    this.language = this.i18n.getCurrentLanguage();
  }

  changeLanguage(): void {
    console.log(this.i18n.translate('test'));
    this.i18n.changeLanguage(this.language);
  }

}
