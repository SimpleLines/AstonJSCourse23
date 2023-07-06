import { App } from './app.js';

const app = new App({ limit: 44 });

function run(page) {
  app.run({ page });
}

export function rerender(page) {
  app.clear();
  app.run({ page });
}

run(1);
