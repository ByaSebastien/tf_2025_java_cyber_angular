import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import './app/exos/components/exo4/extensions/date.extensions'

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
