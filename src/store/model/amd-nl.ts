import {Store} from './store';

export const AmdNl: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    inStock: {
      container: '.btn-shopping-cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: true,
    },
    outOfStock: {
      container: '.btn-radeon',
      text: ['out of stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amd.com/en/direct-buy/5450881400/nl',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881400/nl?add-to-cart=true',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amd.com/en/direct-buy/5450881400/nl',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881500/nl?add-to-cart=true',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amd.com/en/direct-buy/5450881500/nl',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881600/nl?add-to-cart=true',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amd.com/en/direct-buy/5450881600/nl',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881700/nl?add-to-cart=true',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amd.com/en/direct-buy/5450881700/nl',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5496921400/nl?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6700xt',
      url: 'https://www.amd.com/en/direct-buy/5496921400/nl',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458374000/nl?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amd.com/en/direct-buy/5458374000/nl',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458374100/nl?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/en/direct-buy/5458374100/nl',
    },
    {
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458374200/nl?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amd.com/en/direct-buy/5458374200/nl',
    },
  ],
  name: 'amd-nl',
};
