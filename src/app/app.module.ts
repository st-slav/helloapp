import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
//import {AppComponent} from './app.component';
//import {ChildComponent} from "./child.component";
//import {ChildSecondComponent} from "./childsecond.component";
//import {ChildThirdComponent} from "./childthird.component";
//import {ChildFourthComponent} from "./childfourth.component";
//import {ChildFifthComponent} from "./childfifth.component";
//import {ChildSixthComponent} from "./childsixth.component";
//import {BoldDirective} from "./bold.directive";
//import {BoldHoverDirective} from "./boldhover.directive";
//import {CursiveHoverDirective} from "./cursivehover.directive";
//import {ChildIfComponent} from "./childif.component";
//import {ChildForComponent} from "./childfor.component";
//import {ChildSwitchComponent} from "./childswitch.component";
//import {WhileDirective} from "./while.directive";
//import {SeventhComponent} from "./seventh.component";
import {GeneralComponent} from "./general.component";
import {DataComponent} from "./data.component";
import {PhoneDataService} from "./phone-data.service";
import {LogService} from "./log.service";

/*
 * declarations: классы представлений (view classes), которые принадлежат модулю. Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)
 * exports: набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
 * imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
 * providers: классы, создающие сервисы, используемые модулем
 * bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения
 */
@NgModule({
  imports: [BrowserModule, FormsModule],
//  declarations: [AppComponent, ChildComponent, ChildSecondComponent, ChildThirdComponent, ChildFourthComponent,
//    ChildFifthComponent, ChildSixthComponent, BoldDirective, BoldHoverDirective, CursiveHoverDirective, ChildIfComponent,
//    ChildForComponent, ChildSwitchComponent, WhileDirective, SeventhComponent,
//  ],
//  bootstrap: [AppComponent],
  declarations: [GeneralComponent, DataComponent],
  bootstrap: [GeneralComponent],
  exports: [],
  providers: [PhoneDataService, LogService] // чтоб создавался один объект сервиса для каждого компонента
})

export class AppModule {}
