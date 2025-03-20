import { Locator } from '@playwright/test';

class ActionsManager {
  private async tryAction(action: () => Promise<void>, errorMessage?: string) {
    const defaultMessage = 'Error al ejecutar la acción';
    try {
      await action();
    } catch (error) {
      console.error(`${errorMessage ?? defaultMessage} - ${error.message}`);
    }
  }

  async fillOn(locator: Locator, value: string) {
    await this.tryAction(() => locator.fill(value));
  }

  async clickOn(locator: Locator) {
    await this.tryAction(() => locator.click());
  }

  async pressKeyOn(locator: Locator, key: string) {
    await this.tryAction(() => locator.press(key));
  }

  async choseProduct(locator: Locator) {
    const allProducts = await locator.all();
    const getRandomNumber = Math.floor(Math.random() * allProducts.length);
    const product = allProducts[0];
    await product.click();
  }
}

export { ActionsManager };
