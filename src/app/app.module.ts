import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponentComponent } from "./core/header/header-component/header-component.component";
import { FooterComponentComponent } from "./core/footer/footer-component/footer-component.component";
import { HomeComponent } from "./modules/home/home.component";

import { BodyComponent } from './modules/body/body.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './modules/experience/experience.component';
import { TechnicalSkillsComponent } from './modules/technical-skills/technical-skills.component';
import { PersonalInfoComponent } from './modules/personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponent,
    BodyComponent,
    ExperienceComponent,
    TechnicalSkillsComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
