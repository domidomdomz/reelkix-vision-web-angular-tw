import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding, Routes } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { heroBars3Solid, heroXMarkSolid, heroSunSolid, heroMoonSolid, heroPlusSolid, heroHeartSolid } from '@ng-icons/heroicons/solid';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UploadShoePageComponent } from './app/components/upload/upload-shoe-page.component';

const routes: Routes = [
  { path: '', component: UploadShoePageComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    provideIcons({
      heroBars3Solid,
      heroXMarkSolid,
      heroSunSolid,
      heroMoonSolid,
      heroPlusSolid,
      heroHeartSolid})
  ]
}).catch((err) => console.error(err));