import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DependecyInjectionComponent } from './dependecy-injection/dependecy-injection.component';
import { FilterComponent } from './filter/filter.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { NodisplayComponent } from './nodisplay/nodisplay.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { RetryComponent } from './retry/retry.component';
import { ServicesComponent } from './services/services.component';
import { SingletonComponent } from './singleton/singleton.component';
import { SubjectComponent } from './subject/subject.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';
//import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: 'ngIf', component: NgIfComponent },
  { path: 'life-cycle', component: LifeCycleComponent },
  { path: 'custom-directive', component: CustomDirectiveComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'common', component: CommonComponent },
  { path: 'dependency', component: DependecyInjectionComponent },
  { path: 'form', component: FormComponent },
  { path: 'singleton', component: SingletonComponent },



  { path: 'interval', component: IntervalComponent },
  { path: 'of-from', component: OfFromComponent },
  { path: 'toArray', component: ToArrayComponent },
  { path: 'customObservable', component: CustomObservableComponent },
  { path: 'map', component: MapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'tap', component: TapComponent },
  { path: 'take', component: TakeComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'debounce', component: DebounceComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'replay', component: ReplaySubjectComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NodisplayComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
