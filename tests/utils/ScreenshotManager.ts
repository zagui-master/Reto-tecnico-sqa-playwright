import { Page, TestInfo } from '@playwright/test';

class ScreenshotManager {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async takeScreenshot(testInfo: TestInfo, fullPage?: boolean) {
    const screenshot = await this.page.screenshot({
      fullPage: fullPage ?? false,
    });
    await testInfo.attach('screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  }
}

export { ScreenshotManager };
