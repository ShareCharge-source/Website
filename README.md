# ShareCharge — marketingwebsite

Statische website voor ShareCharge, het peer-to-peer laadpaalplatform van MiTo Tech.

## Structuur

```
sharecharge-website/
├── index.html              # Homepage (volledig, ongewijzigd design)
├── about.html              # Over ons (placeholder)
├── contact.html            # Contact (placeholder)
├── hoe-het-werkt.html      # Hoe het werkt (placeholder)
├── blog/
│   ├── index.html          # Blogoverzicht
│   └── *.html              # Artikelen (placeholders)
├── legal/
│   ├── privacy.html        # Privacybeleid (placeholder — door jurist te controleren)
│   └── voorwaarden.html    # Algemene voorwaarden (placeholder)
├── assets/
│   ├── css/                # style.css (import-hub) + thematische modules + README
│   ├── js/main.js          # Alle interactie (uit de oorspronkelijke <script>)
│   ├── images/             # logo.png, kantoor.png, app-screen-1..3.jpg
│   └── videos/             # hero-bg.mp4, hero-card-1..3.mp4, map.mp4
├── robots.txt
├── sitemap.xml
└── README.md
```

## Wat er is gedaan

De oorspronkelijke `sharecharge (7) (1).html` was één bestand van ~12,8 MB met alle
CSS, JavaScript én media (base64) inline. Dit is opgesplitst:

- **CSS** → `assets/css/style.css`, gekoppeld via `<link>` in de `<head>`.
- **JavaScript** → `assets/js/main.js`, gekoppeld onderaan via `<script>`.
- **Media** → 12 base64-fragmenten gedecodeerd naar 10 unieke bestanden
  (het logo kwam 3× voor en is gededupliceerd). Alle `src`-verwijzingen wijzen
  nu naar `assets/images/` of `assets/videos/`.

Het **design van de homepage is ongewijzigd** — alleen de bron is opgeschoond.
`index.html` ging van 12,8 MB naar ~21 KB.

> Let op: `kantoor.png` heette eerst "logo-2"; het is feitelijk een kantoorfoto,
> geen logo. De alt-tekst is daarop aangepast.

## Lokaal bekijken

Vanwege paden en video's draai je dit het beste via een lokale server:

```bash
cd sharecharge-website
python3 -m http.server 8000
# open http://localhost:8000
```

## Nog te doen

- Placeholder-pagina's (about, contact, hoe-het-werkt, blog, legal) invullen.
- Privacybeleid en voorwaarden juridisch laten controleren.
- Social links (LinkedIn, Facebook, YouTube) activeren in de footer.
- Domein in `robots.txt` en `sitemap.xml` aanpassen indien het geen
  `www.sharecharge.nl` wordt.
