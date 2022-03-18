import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components-interaction/child/child.component';
import { ParentComponent } from './components-interaction/parent/parent.component';
import { BindingComponent } from './components-interaction/binding/binding.component';
import { ParentAComponent } from './components-interaction/parent-a/parent-a.component';
import { ChildAComponent } from './components-interaction/child-a/child-a.component';
import { ChildBComponent } from './components-interaction/child-b/child-b.component';
import { ParentBComponent } from './components-interaction/parent-b/parent-b.component';
import { ParentCComponent } from './components-interaction/parent-c/parent-c.component';
import { ChildCComponent } from './components-interaction/child-c/child-c.component';
import { ChildDComponent } from './components-interaction/child-d/child-d.component';
import { ParentDComponent } from './components-interaction/parent-d/parent-d.component';
import { CommonComponent } from './common/common.component';
import { HooksComponent } from './hooks/hooks.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { NodisplayComponent } from './nodisplay/nodisplay.component';
import { ServicesComponent } from './services/services.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { SalaryComponent } from './common/salary/salary.component';
import { CommonDirective } from './common.directive';
import { DependecyInjectionComponent } from './dependecy-injection/dependecy-injection.component';
import { DesignService } from './dependecy-injection/design.service';
import { FormComponent } from './form/form.component';
import { StudentAddressService } from './student-list/student-address.service';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceComponent } from './debounce/debounce.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './subject/comp1/comp1.component';
import { Comp2Component } from './subject/comp2/comp2.component';
import { Comp3Component } from './subject/comp3/comp3.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SingletonComponent } from './singleton/singleton.component';
import { Agent1Component } from './singleton/agent1/agent1.component';
import { Agent2Component } from './singleton/agent2/agent2.component';
import { BusBookingService } from './singleton/bus-booking.service';
import { HeaderComponent } from './components/header/header.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { OnChangeComponent } from './components/life-cycle/on-change/on-change.component';
import { LifeCycleFormComponent } from './components/life-cycle/life-cycle-form/life-cycle-form.component';
import { DoCheckComponent } from './components/life-cycle/do-check/do-check.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { CustomDirective } from './components/custom-directive/custom.directive';






@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    BindingComponent,
    ParentAComponent,
    ChildAComponent,
    ChildBComponent,
    ParentBComponent,
    ParentCComponent,
    ChildCComponent,
    ChildDComponent,
    ParentDComponent,
    CommonComponent,
    HooksComponent,
    StudentListComponent,
    HomeComponent,
    NodisplayComponent,
    ServicesComponent,
    UserDetailsComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    NgContentComponent,
    SalaryComponent,
    CommonDirective,
    DependecyInjectionComponent,
    FormComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    SingletonComponent,
    Agent1Component,
    Agent2Component,
    HeaderComponent,
    NgIfComponent,
    LifeCycleComponent,
    OnChangeComponent,
    LifeCycleFormComponent,
    DoCheckComponent,
    CustomDirectiveComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DesignService, StudentAddressService, BusBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
