import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// used to create fake backend
import { fakeBackendProvider } from '../app/jwt/_helpers/fake-backend';
import { JwtInterceptor } from '../app/jwt/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../app/jwt/_helpers/error.interceptor';

import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';

import { NewPostComponent } from './pages/blog/new-post/new-post.component';
import { EditPostComponent } from './pages/blog/edit-post/edit-post.component';
import { ServiceblogService } from './pages/blog/blog-service.service';
import { RelayOnComponent } from './pages/about/About-Components/relay-on/relay-on.component';
import { AchivementComponent } from './pages/about/About-Components/achivement/achivement.component';
import { TeamComponent } from './pages/about/About-Components/team/team.component';
import { TopContentComponent } from './pages/about/About-Components/top-content/top-content.component';

import { FullComponent } from './layout/full/full.component';
import { LoginComponent } from './pages/login/login.component';

import { BannerComponent } from './shared/banner/banner.component';

import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AccordionComponent } from './pages/ui-elements/accordion/accordion.component';
import { AlertComponent } from './pages/ui-elements/alert/alert.component';
import { CarouselComponent } from './pages/ui-elements/carousel/carousel.component';
import { DropdownComponent } from './pages/ui-elements/dropdown/dropdown.component';
import { ModalComponent } from './pages/ui-elements/modal/modal.component';
import { PaginationComponent } from './pages/ui-elements/pagination/pagination.component';
import { PopovertooltipComponent } from './pages/ui-elements/popovertooltip/popovertooltip.component';
import { ProgressbarComponent } from './pages/ui-elements/progressbar/progressbar.component';
import { RatingComponent } from './pages/ui-elements/rating/rating.component';
import { TabComponent } from './pages/ui-elements/tab/tab.component';
import { TimepickerComponent } from './pages/ui-elements/timepicker/timepicker.component';
import { ButtonComponent } from './pages/ui-elements/button/button.component';
import { CardComponent } from './pages/ui-elements/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';






@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    LoginComponent,
    NewPostComponent,
    EditPostComponent,
    RelayOnComponent,
    AchivementComponent,
    TeamComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    BannerNavigationComponent,
    FooterComponent,
    AccordionComponent,
    AlertComponent,
    CarouselComponent,
    DropdownComponent,
    ModalComponent,
    PaginationComponent,
    PopovertooltipComponent,
    ProgressbarComponent,
    RatingComponent,
    TabComponent,
    TimepickerComponent,
    ButtonComponent,
    CardComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceblogService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
