import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleListComponent } from './components/title-list/title-list.component';
import { RouterModule, Routes } from '@angular/router';
import { StoryDetailComponent } from './components/story-detail/story-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  { path: '', component: TitleListComponent },
  {
    path: 'story/:id',
    component: StoryDetailComponent,
  },
];

@NgModule({
  declarations: [AppComponent, TitleListComponent, StoryDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
