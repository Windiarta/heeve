import { expect, test } from 'bun:test';
import { showcaseRegistry } from '../src/showcases/registry';

test('showcase configs expose optional business fields and valid products', () => {
  const entries = Object.values(showcaseRegistry);
  expect(entries).toHaveLength(7);
  expect(new Set(entries.map(({ config }) => config.slug)).size).toBe(7);
  for (const { config } of entries) {
    expect(config.products.length).toBeGreaterThan(0);
    expect(config.title).toBeTruthy();
    expect(config.theme.light.primary).toBeTruthy();
    expect(config.theme.dark.primary).toBeTruthy();
    expect(new Set(config.products.map(product => product.number)).size).toBe(config.products.length);
    expect(config.products.every(product => product.price >= 0 && product.unit)).toBe(true);
    expect(config.contactPersonWhatsapp).toBeTruthy();
  }
});
