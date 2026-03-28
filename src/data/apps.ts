export interface AppData {
  slug: string
  name: string
  tagline: string
  description: string
  icon: string
  screenshots: string[]
  playStoreUrl: string
  category: string
  features: string[]
  techStack: string[]
  releaseDate: string
  privacyPolicy: PrivacyPolicy
  dataCollected: DataSafetyItem[]
}

export interface PrivacyPolicy {
  lastUpdated: string
  contactEmail: string
  content: string
}

export interface DataSafetyItem {
  dataType: string
  collected: boolean
  shared: boolean
  purpose: string
}

export const apps: AppData[] = [
  {
    slug: 'duskscreen',
    name: 'DuskScreen',
    tagline: 'Filter blue light with warm screen tints to reduce eye strain at night',
    description:
      'DuskScreen applies a warm colour overlay to your screen, reducing blue light emission to help you sleep better. Choose from preset tints or create your own custom colour filter. Set timers to automatically turn off the filter, and enjoy a comfortable viewing experience even in the dark.',
    icon: '/images/apps/duskscreen/icon.png',
    screenshots: [
      '/images/apps/duskscreen/screenshot-1.png',
      '/images/apps/duskscreen/screenshot-2.png',
      '/images/apps/duskscreen/screenshot-3.png',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.screendimmer.app',
    category: 'Tools',
    features: [
      '6 built-in tint presets for every lighting condition',
      'Smart timers — auto-disable after a set duration',
      'Fully customisable colours and intensity',
      'Ultra-efficient — minimal battery usage',
      'Privacy-first — works entirely offline',
      'Lock screen support — filter stays on when your screen locks',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Material 3'],
    releaseDate: '2025-01-01',
    privacyPolicy: {
      lastUpdated: '2025-06-01',
      contactEmail: 'ryansramblings93@gmail.com',
      content: `
<h2>Privacy Policy for DuskScreen</h2>
<p><strong>Last updated:</strong> June 1, 2025</p>

<h3>Overview</h3>
<p>DuskScreen ("the App") is developed by Ryan Stewart. Your privacy is important to us. This policy explains what data the App collects, how it is used, and your rights.</p>

<h3>Data Collection</h3>
<p><strong>DuskScreen does not collect, store, or transmit any personal data.</strong></p>
<ul>
  <li>No analytics or tracking</li>
  <li>No advertising SDKs</li>
  <li>No network requests — the App works entirely offline</li>
  <li>No user accounts or sign-in</li>
</ul>

<h3>Permissions</h3>
<p>The App requests the following permissions:</p>
<ul>
  <li><strong>Display over other apps</strong> — required to apply the screen tint overlay</li>
</ul>

<h3>Data Sharing</h3>
<p>Since no data is collected, no data is shared with third parties.</p>

<h3>Children's Privacy</h3>
<p>The App does not knowingly collect any information from children under 13.</p>

<h3>Changes to This Policy</h3>
<p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.</p>

<h3>Contact</h3>
<p>If you have any questions about this Privacy Policy, please contact us at:</p>
<p><a href="mailto:ryansramblings93@gmail.com">ryansramblings93@gmail.com</a></p>
      `.trim(),
    },
    dataCollected: [
      {
        dataType: 'Personal information',
        collected: false,
        shared: false,
        purpose: 'N/A — no data collected',
      },
      {
        dataType: 'Device or other IDs',
        collected: false,
        shared: false,
        purpose: 'N/A — no data collected',
      },
    ],
  },
]
