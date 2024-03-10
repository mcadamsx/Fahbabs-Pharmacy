import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {AuthServiceService} from "./services/auth-service.service";
import { DrugsServiceService } from './services/drugs-service.service';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), [provideHttpClient(withFetch())],[AuthServiceService, DrugsServiceService]]
};
