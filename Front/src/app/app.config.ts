import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from "./auth/auth.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
        providers: [provideRouter(routes),
        AuthService, provideAnimationsAsync(), provideAnimationsAsync()
    ]
};
