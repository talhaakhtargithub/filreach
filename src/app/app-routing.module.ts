import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { SolutionsComponent } from './solutions/solutions.component';

const routes: Routes = [
  { path: '', redirectTo: '/hero', pathMatch: 'full' }, // Redirect to hero section on load
  { path: 'hero', component: HeroSectionComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
