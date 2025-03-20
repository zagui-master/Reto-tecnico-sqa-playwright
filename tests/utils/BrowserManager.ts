import { Page } from '@playwright/test';

class BrowserManager {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url?: string) {
    try {
      const destinationUrl = url ?? '';
      await this.page.goto(destinationUrl);
    } catch (error) {
      console.error(
        `No se puedo navegar al sitio web, verifique que la url sea correcta o este configurada en el archivo .env, Información adicional: ${error.message}`
      );
    }
  }

  async closeBrowser() {
    await this.page.close();
  }
}

export { BrowserManager };
