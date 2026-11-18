#!/usr/bin/env node
/**
 * Turn a fresh copy of learning-hub-track-template into a real track. Run it ONCE, right
 * after "Use this template":
 *
 *   node tools/init-track.mjs <slug> "<Tên track>" <github-username>
 *   node tools/init-track.mjs csharp-basics "C# cơ bản" nguyenvana
 *
 * It renames tracks/example-track to tracks/<slug>, sets the slug, title and maintainer,
 * and gives every track, module, lesson and exercise a NEW uid. New uids matter: the uid
 * is the key in the Learning Hub database, so two tracks must never share one.
 * No dependencies: Node 22 only.
 */
import { randomBytes } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEMPLATE_SLUG = 'example-track';
const TEMPLATE_USER = 'TienNHM';
const TEMPLATE_TITLE = 'Track mẫu';

const [slug, title, user] = process.argv.slice(2);
const fail = (message) => {
  console.error(`✗ ${message}`);
  process.exit(1);
};

if (!slug || !title || !user) {
  fail('usage: node tools/init-track.mjs <slug> "<Tên track>" <github-username>');
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(`slug "${slug}" must be kebab-case: a-z, 0-9, -`);
if (!/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})$/.test(user)) fail(`"${user}" is not a GitHub username`);

const from = join('tracks', TEMPLATE_SLUG);
const to = join('tracks', slug);
if (!existsSync(from)) fail(`${from} not found: this repo was already initialized`);
if (existsSync(to)) fail(`${to} already exists`);

/** UUID v7 (time-ordered), the format CONTENT-SPECIFICATION §2 recommends. */
function uuidv7() {
  const b = randomBytes(16);
  const ms = BigInt(Date.now());
  for (let i = 0; i < 6; i++) b[i] = Number((ms >> BigInt(8 * (5 - i))) & 0xffn);
  b[6] = (b[6] & 0x0f) | 0x70;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = b.toString('hex');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (/\.(ya?ml|md)$/.test(name)) files.push(full);
  }
};

renameSync(from, to);
walk(to);

const UID = /^(\s*uid:\s*)([0-9a-f-]{36})\s*$/gm;
let uids = 0;
for (const file of files) {
  const text = readFileSync(file, 'utf8')
    .replace(UID, (_, key) => {
      uids += 1;
      return `${key}${uuidv7()}`;
    })
    .replaceAll(`${TEMPLATE_SLUG}/`, `${slug}/`)
    .replaceAll(`github:${TEMPLATE_USER}`, `github:${user}`)
    .replace(/^slug: example-track$/m, `slug: ${slug}`)
    .replace(`title: "${TEMPLATE_TITLE}"`, `title: ${JSON.stringify(title)}`);
  writeFileSync(file, text);
}

writeFileSync(
  'CODEOWNERS',
  readFileSync('CODEOWNERS', 'utf8').replaceAll(`@${TEMPLATE_USER}`, `@${user}`),
);
const readme = readFileSync('README.md', 'utf8').split('\n');
readme[0] = `# ${title}`;
writeFileSync('README.md', readme.join('\n').replaceAll(TEMPLATE_SLUG, slug));

console.log(`✓ tracks/${slug}: ${files.length} files, ${uids} new uids, maintainer @${user}`);
console.log('Next: edit track.yaml (summary, level, tags, outcomes), run the validator, open a PR.');
