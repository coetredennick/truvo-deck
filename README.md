# Truvo Pitch Deck Builder

Professional pitch deck system for Truvo Digital with client customization support.

## Structure

```
truvo-deck/
├── src/
│   ├── templates/
│   │   └── base-deck.html          # Base pitch deck template
│   └── assets/
│       ├── logos/
│       │   └── truvo-logo.png      # Truvo logo
│       └── images/
│           └── team/               # Team avatars
├── scripts/
│   ├── build-base.js               # Build base deck PDF
│   └── build-client.js             # Build client-specific deck PDF
├── clients/
│   └── rowe-environmental/         # Client-specific decks
│       ├── rowe-environmental-deck.html
│       ├── rowe-environmental-deck.pdf
│       └── truvo-logo.png
├── output/
│   └── truvo-deck.pdf              # Generated base deck PDF
├── package.json
└── README.md
```

## Usage

### Build Base Deck
```bash
npm run build
# or
npm run build:base
```

### Build Client Deck
```bash
npm run build:rowe
# or
node scripts/build-client.js rowe-environmental
```

### Build Everything
```bash
npm run build:all
```

## Creating a New Client Deck

1. Create a new client directory:
   ```bash
   mkdir -p clients/[client-name]
   ```

2. Copy the base template or existing client as starting point:
   ```bash
   cp src/templates/base-deck.html clients/[client-name]/[client-name]-deck.html
   ```

3. Copy the logo:
   ```bash
   cp src/assets/logos/truvo-logo.png clients/[client-name]/
   ```

4. Edit the HTML with client-specific content

5. Build the PDF:
   ```bash
   node scripts/build-client.js [client-name]
   ```

## Output

- Base deck: `output/truvo-deck.pdf`
- Client decks: `clients/[client-name]/[client-name]-deck.pdf`

## Requirements

- Node.js 18+
- Puppeteer (installed via npm)
