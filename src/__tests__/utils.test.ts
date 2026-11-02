import { describe, it, expect } from 'vitest';
import { formatPrice, applyMargin, slugify, classNames } from '../lib/utils';

describe('formatPrice', () => {
  it('formatea un precio en pesos mexicanos sin decimales', () => {
    expect(formatPrice(4499)).toBe('$4,499 MXN');
    expect(formatPrice(0)).toBe('$0 MXN');
    expect(formatPrice(1234.56)).toBe('$1,235 MXN');
  });
});

describe('applyMargin', () => {
  it('aplica el margen por defecto de 1.3', () => {
    expect(applyMargin(1000)).toBe(1300);
  });
  it('aplica un margen personalizado', () => {
    expect(applyMargin(1000, 1.5)).toBe(1500);
  });
  it('redondea a 2 decimales', () => {
    expect(applyMargin(100, 1.333)).toBe(133.3);
  });
});

describe('slugify', () => {
  it('convierte texto a slug válido', () => {
    expect(slugify('Terminal Clip Total 3')).toBe('terminal-clip-total-3');
    expect(slugify('  Cámaras & Vigilancia  ')).toBe('camaras-vigilancia');
  });
});

describe('classNames', () => {
  it('filtra valores falsy y une clases', () => {
    expect(classNames('a', false, null, undefined, 'b')).toBe('a b');
    expect(classNames()).toBe('');
  });
});