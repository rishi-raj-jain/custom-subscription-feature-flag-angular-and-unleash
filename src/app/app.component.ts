import { Component } from '@angular/core'
import { UnleashService } from '@karelics/angular-unleash-proxy-client'
import { FeatureEnabledDirective } from '@karelics/angular-unleash-proxy-client'

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FeatureEnabledDirective],
})
export class AppComponent {
  title = 'custom-subscription-feature-flag-angular-and-unleash'
  randomNumber: number = 0

  constructor(private unleashService: UnleashService) {
    this.generateRandomNumber()
  }

  generateRandomNumber() {
    this.randomNumber = Math.random()
    if (this.randomNumber > 0.5) {
      this.unleashService.unleash.updateContext({
        properties: {
          subscription: 'Pro',
        },
      })
    }
  }
}
