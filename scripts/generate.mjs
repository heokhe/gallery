#!/usr/bin/env zx

import 'zx/globals'
import slugify from 'slug'

$.verbose = false

const templates = await fs.readdir(path.resolve(__dirname, '../templates'))
const template = await question('choose template (press tab to autocomplete): ', { choices: templates })
if (!templates.includes(template)) {
  echo`template "${template}" does not exist`
  process.exit(1)
}

const title = await question('artwork title: ')
let slug = slugify(title)
slug = await question(`artwork slug (${slug}): `) || slug

await $`cp -r templates/${template} pages/${slug}`
await $`sed s/%title%/${title}/g pages/${slug}/*.html --in-place`
await fs.writeJSON(path.resolve(__dirname, `../pages/${slug}/.metadata.json`), { title, slug })

echo`done`
