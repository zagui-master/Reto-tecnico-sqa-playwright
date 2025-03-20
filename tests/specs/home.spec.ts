import { test, expect } from '@playwright/test';
import { BrowserManager } from '../utils/BrowserManager';
import { ActionsManager } from '../utils/ActionsManager';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/productPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';

test.describe('Verificar el correcto funcionamiento del sitio web alixpress', () => {
  let browserManager: BrowserManager;
  let actions: ActionsManager;
  let homePage: HomePage;
  let productPage: ProductPage;
  let shoppingCartPage: ShoppingCartPage;

  test.beforeEach(async ({ page }) => {
    browserManager = new BrowserManager(page);
    actions = new ActionsManager();
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    //shoppingCartPage = new ShoppingCartPage(page);
    await browserManager.navigateTo();
  });

  test.afterEach(async ({ page }) => {
    await browserManager.closeBrowser();
  });

  test('Verificar que el usuario puede buscar y agregar un productos al carrito de compras exitosamente', async ({
    page,
    context,
  }) => {
    await actions.fillOn(homePage.inputSearch, 'xbox');
    await actions.pressKeyOn(homePage.inputSearch, 'Enter');

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      actions.choseProduct(productPage.products),
    ]);

    await newPage.waitForLoadState();
    const newProductPage = new ProductPage(newPage);
    await actions.clickOn(newProductPage.btnAddProduct);

    await Promise.all([
      actions.clickOn(newProductPage.shoppingCartIcon),
      newPage.waitForURL(/shoppingcart\/index\.html/),
    ]);

    //const newShoppingCartPage = new ShoppingCartPage(newPage);
    //await expect(newShoppingCartPage.productsPrice).toBeVisible();
  });
});
