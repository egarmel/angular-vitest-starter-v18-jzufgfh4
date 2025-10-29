import { ChangeDetectionStrategy, Component } from '@angular/core';
import { render } from '@testing-library/angular';
import { test } from 'vitest';
import { NxContextMenuModule } from '@allianz/ng-aquila/context-menu';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NxContextMenuModule],
  template: ``,
})
export class TestComponent {}

test('renders menu with context menu dependency', async () => {
  await render(TestComponent);
});
