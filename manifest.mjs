const manifest = {
    name: "Moodist",
    short_name: "Moodist",
    description: "Ambient sounds for focus and calm",
    theme_color: '#d4d4d8',
    background_color: "#000000",
    display: "standalone",
    orientation: "any",
    scope: "/moodist/",
    start_url: "/moodist/",
    icons: [
      {
        src: './maskable/maskable.svg',
        sizes: "any",
        type: 'image/svg+xml',
        purpose: 'any maskable'
      },
      ...[72, 96, 128, 144, 152, 192, 384, 512].map(size=>({
        src: `./maskable/maskable-${size}x${size}.png`,
        sizes: `${size}x${size}`,
        type: 'image/png',
        purpose: 'any maskable'
      }))
    ]
  }

  export default manifest