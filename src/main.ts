import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Bootstraps the Angular application by initializing the root module
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
