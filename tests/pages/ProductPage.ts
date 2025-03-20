import { Page, Locator } from '@playwright/test';
class ProductPage {
  readonly products: Locator;
  readonly btnAddProduct: Locator;
  readonly shoppingCartIcon: Locator;

  constructor(page: Page) {
    this.products = page.locator('//div[@id="card-list"]//div');
    this.btnAddProduct = page.getByRole('button', {
      name: 'Agregar al carrito',
    });
    this.shoppingCartIcon = page.locator(
      '//div[@data-spm="header"]//div[4]//a'
    );
  }
}
export { ProductPage };
