import { Component } from '@angular/core'
import { FeatureEnabledDirective } from '@karelics/angular-unleash-proxy-client'

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FeatureEnabledDirective],
})

export class AppComponent {
  title = 'custom-subscription-feature-flag-angular-and-unleash'
}
