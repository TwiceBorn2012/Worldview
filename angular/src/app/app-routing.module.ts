import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { NewPostComponent } from './pages/blog/new-post/new-post.component';
import { EditPostComponent } from './pages/blog/edit-post/edit-post.component';

import { FullComponent } from './layout/full/full.component';
import { LoginComponent } from './pages/login/login.component';

import { ContactComponent } from './pages/contact/contact.component';

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



const routes: Routes = [
  
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'post', component: NewPostComponent },
      { path: 'editPost/:id', component: EditPostComponent },
      { path: 'about', component: AboutComponent },

      { path: 'accordion', component: AccordionComponent },
      { path: 'alert', component: AlertComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'dropdown', component: DropdownComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'popovertooltip', component: PopovertooltipComponent },
      { path: 'progress', component: ProgressbarComponent },
      { path: 'rating', component: RatingComponent },
      { path: 'tab', component: TabComponent },
      { path: 'timepicker', component: TimepickerComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'card', component: CardComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
