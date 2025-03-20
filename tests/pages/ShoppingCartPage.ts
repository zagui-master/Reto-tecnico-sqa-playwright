import { Page, Locator } from '@playwright/test';
class ShoppingCartPage {
  readonly productsPrice: Locator;

  constructor(page: Page) {
    this.productsPrice = page.locator(
      '//div[@class="es--wrap--2p8eS4Q notranslate'
    );
  }
}
export { ShoppingCartPage };
