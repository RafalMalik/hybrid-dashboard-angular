import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {QuestionComponent} from './question/question.component';
import {QuestionDetailComponent} from './question-detail/question-detail.component';
import {QuestionCreateComponent} from './question-create/question-create.component';
import {QuestionEditComponent} from './question-edit/question-edit.component';
import {GameComponent} from './game/game.component';
import {GameDetailComponent} from './game-detail/game-detail.component';
import {AboutComponent} from './about/about.component';


const appRoutes: Routes = [
  {
    path: 'questions',
    component: QuestionComponent,
    data: {title: 'Book List'}
  },
  {
    path: 'question-details/:id',
    component: QuestionDetailComponent,
    data: {title: 'Question Details'}
  },
  {
    path: 'question-create',
    component: QuestionCreateComponent,
    data: {title: 'Create Book'}
  },
  {
    path: 'question-edit/:id',
    component: QuestionEditComponent,
    data: {title: 'Edit Book'}
  },
  {
    path: 'games',
    component: GameComponent,
    data: {title: 'Game List'}
  },
  {
    path: 'game-details/:id',
    component: GameDetailComponent,
    data: {title: 'Game List'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {title: 'Game List'}
  },
  {
    path: '',
    redirectTo: '/questions',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionDetailComponent,
    QuestionCreateComponent,
    QuestionEditComponent,
    GameComponent,
    GameDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
