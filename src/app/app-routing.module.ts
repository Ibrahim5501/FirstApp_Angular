import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: 'create', component: MemberFormComponent
  },
  {
    path: '', component: MemberComponent
  },
  {
    path: ':id/edit', component: MemberFormComponent
  },
  {
    path: 'member', component: MemberComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'tools', component: ToolComponent
  },
  {
    path: 'articles', component: ArticleComponent
  },
  {
    path: 'events', component: EventComponent
  },
  {
    path: '**', component: MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
