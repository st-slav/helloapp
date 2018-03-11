import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ChildComponent} from "./child.component";
import {ChildSecondComponent} from "./childsecond.component";
import {ChildThirdComponent} from "./childthird.component";
import {ChildFourthComponent} from "./childfourth.component";
import {ChildFifthComponent} from "./childfifth.component";
import {ChildSixthComponent} from "./childsixth.component";

/*
 * declarations: классы представлений (view classes), которые принадлежат модулю. Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)
 * exports: набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
 * imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
 * providers: классы, создающие сервисы, используемые модулем
 * bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения
 */
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChildComponent, ChildSecondComponent, ChildThirdComponent, ChildFourthComponent, ChildFifthComponent, ChildSixthComponent],
  bootstrap: [AppComponent],
  exports: [],
  providers: []
})

export class AppModule {}
