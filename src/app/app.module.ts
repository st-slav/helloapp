import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './base/app.component';
import { ChildComponent } from "./base/child.component";
import { ChildSecondComponent } from "./base/childsecond.component";
import { ChildThirdComponent } from "./base/childthird.component";
import { ChildFourthComponent } from "./base/childfourth.component";
import { ChildFifthComponent } from "./base/childfifth.component";
import { ChildSixthComponent } from "./base/childsixth.component";
import { BoldDirective } from "./base/bold.directive";
import { BoldHoverDirective } from "./base/boldhover.directive";
import { CursiveHoverDirective } from "./base/cursivehover.directive";
import { ChildIfComponent } from "./base/childif.component";
import { ChildForComponent } from "./base/childfor.component";
import { ChildSwitchComponent } from "./base/childswitch.component";
import { WhileDirective } from "./base/while.directive";
import { SeventhComponent } from "./base/seventh.component";
import { GeneralComponent } from "./phone/general.component";
import { DataComponent } from "./phone/data.component";
import { PhoneDataService } from "./phone/phone-data.service";
import { LogService } from "./phone/log.service";
import { UserAppComponent } from "./user/user-app.component";
import { UserFormAppComponent } from "./user/user-form-app.component";
import { UserReactiveFormAppComponent } from "./user/user-reactive-form-app.component";
import { HttpClientModule } from '@angular/common/http';
import { UserHttpComponent } from './user/user-http.component';

import { HomeAppComponent } from './home-app.component';
import { AboutAppComponent } from './about-app.component';
import { NotFoundAppComponent } from './not-found-app.component';
import { MainComponent } from './main.component';
import { ItemInfoComponent } from './item-info.component';
import { ItemDetailsComponent } from './item-details.component';
import { ItemStatComponent } from './item-stat.component';
import { AboutGuard } from './about.guard';
import { ExitAboutGuard } from './exit.about.guard';

const itemRoutes: Routes = [
    { path: 'details', component: ItemDetailsComponent },
    { path: 'stat', component: ItemStatComponent }
]

const appRoutes: Routes = [
    { path: '', component: HomeAppComponent },
    { path: 'about', component: AboutAppComponent, canDeactivate: [ExitAboutGuard], canActivate: [AboutGuard] },
    { path: 'item/:id', component: ItemInfoComponent },
    { path: 'item/:id', component: ItemInfoComponent, children: itemRoutes },
    { path: 'general', component: GeneralComponent },
    { path: 'user', component: UserAppComponent },
    { path: 'user-form', component: UserFormAppComponent },
    { path: 'user-reactive-form', component: UserReactiveFormAppComponent },
    { path: 'user-http', component: UserHttpComponent },
    { path: 'my-app', component: AppComponent },
    { path: 'contact', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', component: NotFoundAppComponent }
];

/*
 * declarations: классы представлений (view classes), которые принадлежат модулю. Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)
 * exports: набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
 * imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
 * providers: классы, создающие сервисы, используемые модулем
 * bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения
 */
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [MainComponent, GeneralComponent, DataComponent, UserAppComponent, UserFormAppComponent, UserReactiveFormAppComponent,
        UserHttpComponent, AppComponent, ChildComponent, ChildSecondComponent, ChildThirdComponent, ChildFourthComponent, ItemInfoComponent,
        ChildFifthComponent, ChildSixthComponent, BoldDirective, BoldHoverDirective, CursiveHoverDirective, ChildIfComponent,
        ChildForComponent, ChildSwitchComponent, WhileDirective, SeventhComponent, HomeAppComponent, AboutAppComponent, NotFoundAppComponent,
        ItemDetailsComponent, ItemStatComponent
    ],
    bootstrap: [MainComponent],
    exports: [],
    providers: [PhoneDataService, LogService, AboutGuard, ExitAboutGuard] // чтоб создавался один объект сервиса для каждого компонента
})

export class AppModule { }
