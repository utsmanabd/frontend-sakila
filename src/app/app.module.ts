import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { ActorComponent } from './pages/actor/actor.component';
import { FilmComponent } from './pages/film/film.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DialogComponent } from './pages/actor/dialog/dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { DialogFilmComponent } from './pages/film/dialog-film/dialog-film.component';
import { HomeComponent } from './pages/home/home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Top10CustomerComponent } from './pages/home/chart/top10-customer/top10-customer.component';
import { FilmDistributionByCategoryComponent } from './pages/home/chart/film-distribution-by-category/film-distribution-by-category.component';
import { DailyIncomeComponent } from './pages/home/chart/daily-income/daily-income.component';
import { TopFilmLanguageComponent } from './pages/home/chart/top-film-language/top-film-language.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    SidebarComponent,
    ActorComponent,
    FilmComponent,
    DialogComponent,
    DialogFilmComponent,
    HomeComponent,
    Top10CustomerComponent,
    FilmDistributionByCategoryComponent,
    DailyIncomeComponent,
    TopFilmLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
