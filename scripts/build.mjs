import { copyFile, cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('../dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ['danmaku.css', 'index.html']) {
  await copyFile(new URL(`../${file}`, import.meta.url), new URL(file, output));
}
await copyFile(new URL('../danmaku.css', import.meta.url), new URL('d.css', output));
await cp(new URL('../public/', import.meta.url), new URL('public/', output), { recursive: true });
