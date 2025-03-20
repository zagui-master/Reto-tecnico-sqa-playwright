import { Page, Locator } from '@playwright/test';

class HomePage {
  readonly page: Page;
  readonly inputSearch: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputSearch = page.getByRole('textbox', {
      name: 'audífonos inalámbrico',
    });
  }
}

export { HomePage };
