cat << 'SVG' > public/og-image.svg
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09090b"/>
      <stop offset="50%" stop-color="#121215"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#27272a" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="border" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#27272a"/>
      <stop offset="50%" stop-color="#3f3f46"/>
      <stop offset="100%" stop-color="#27272a"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Outer Frame -->
  <rect x="40" y="40" width="1120" height="550" rx="16" fill="none" stroke="url(#border)" stroke-width="1.5" opacity="0.6"/>

  <!-- Content -->
  <g transform="translate(100, 180)">
    <!-- Subtitle Pill / Badge -->
    <rect x="0" y="0" width="185" height="36" rx="18" fill="#18181b" stroke="#27272a" stroke-width="1"/>
    <circle cx="20" cy="18" r="4" fill="#a1a1aa"/>
    <text x="34" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#a1a1aa" letter-spacing="1">PORTFOLIO</text>

    <!-- Main Heading -->
    <text x="0" y="120" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="82" font-weight="700" fill="#f4f4f5" letter-spacing="-2">Martí Castaño</text>

    <!-- Description -->
    <text x="0" y="180" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="400" fill="#a1a1aa">Fullstack &amp; AI Software Engineer</text>

    <!-- Tech Pills -->
    <g transform="translate(0, 240)">
      <!-- Pill 1 -->
      <rect x="0" y="0" width="140" height="40" rx="8" fill="#18181b" stroke="#27272a" stroke-width="1"/>
      <text x="70" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="500" fill="#d4d4d8" text-anchor="middle">Fullstack</text>

      <!-- Pill 2 -->
      <rect x="156" y="0" width="150" height="40" rx="8" fill="#18181b" stroke="#27272a" stroke-width="1"/>
      <text x="231" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="500" fill="#d4d4d8" text-anchor="middle">AI Solutions</text>

      <!-- Pill 3 -->
      <rect x="322" y="0" width="160" height="40" rx="8" fill="#18181b" stroke="#27272a" stroke-width="1"/>
      <text x="402" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="500" fill="#d4d4d8" text-anchor="middle">Systems Auto</text>
    </g>

    <!-- Footer URL -->
    <g transform="translate(0, 330)">
      <text x="0" y="0" font-family="SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="20" fill="#71717a">portfolio.kore29.com</text>
    </g>
  </g>
</svg>
SVG

sips -s format png public/og-image.svg --out public/og-image.png
