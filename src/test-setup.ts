import '@analogjs/vitest-angular/setup-snapshots';
import '@testing-library/jest-dom/vitest';

import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { vi } from 'vitest';

@NgModule({
  providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
})
export class TestingModule {}

getTestBed().initTestEnvironment(
  [BrowserTestingModule, TestingModule],
  platformBrowserTesting(),
  {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  }
);
