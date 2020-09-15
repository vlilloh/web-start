import { createBasicConfig } from '@open-wc/building-rollup';
import html from '@open-wc/rollup-plugin-html';
import copy from 'rollup-plugin-copy';
import merge from 'deepmerge';

export default merge(
  createBasicConfig(),
  {
    input: `index.html`,
    plugins: [
      html(),
      copy({
        targets: [
          {
            src: [
              `assets`,
              `nowc`,
              `manifest.json`,
              `push-manifest.json`,
            ],
            dest: `dist`,
          },
        ],
      }),
    ],
  }
);