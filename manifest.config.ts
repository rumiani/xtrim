import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  description: "A minimal extension to customize the X interface by hiding specific navigation links.",
  version: pkg.version,
  icons: {
    16: "icons/icon-16.png",
    32: "icons/icon-32.png",
    48: "icons/icon-48.png",
    96: "icons/icon-96.png",
    128: "icons/icon-128.png"
  },
  action: {
    default_icon: {
      48: 'icons/icon-48.png',
    },
    default_popup: 'src/popup/index.html',
  },
  content_scripts: [{
    js: ['src/content/main.tsx'],
    matches: ["https://x.com/*"],
  }],
  background: {
    service_worker: "src/background.ts",
    type: "module"
  },
  permissions: ["scripting", "storage", "activeTab"],
  host_permissions: ["https://x.com/*"],
  author: { email: "maziar.rumiani@gmail.com" },
  homepage_url: "https://github.com/rumiani/xtrim"
})
