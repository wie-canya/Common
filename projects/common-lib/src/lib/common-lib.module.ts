import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';

import { KeepHtmlPipe } from './@pipe/keep-html.pipe';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { CardsComponent } from './cards/cards.component';
import { BancorWidgetComponent } from './bancor-widget/bancor-widget.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  declarations: [
    HeaderComponent,
    KeepHtmlPipe,
    LanguageSwitchComponent,
    FooterComponent,
    FooterSectionComponent,
    CardsComponent,
    BancorWidgetComponent,
  ],
  exports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    KeepHtmlPipe,
    LanguageSwitchComponent,
    FooterSectionComponent,
    CardsComponent,
    BancorWidgetComponent
  ]
})

export class CommonLibModule {}
