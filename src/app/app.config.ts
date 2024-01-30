import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'

import { provideUnleashProxy } from '@karelics/angular-unleash-proxy-client'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideUnleashProxy({
      refreshInterval: 1,
      appName: 'customName',
      url: 'http://localhost:4242/api/frontend',
      clientKey: 'default:development.unleash-insecure-frontend-api-token',
      context: { properties: { region: 'HI' } },
    }),
  ],
}
