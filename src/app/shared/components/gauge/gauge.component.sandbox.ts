import { sandboxOf } from 'angular-playground';
import { GaugeComponent } from './gauge.component';

export default sandboxOf(GaugeComponent)
  .add('GaugeComponent', {
    template: `
    <div class="py-5 px-5">
    <app-table></app-table>
    </div>
    `,
    context:
    {
    }
  });
