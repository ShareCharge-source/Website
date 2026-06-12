# CSS-structuur

De styling is opgedeeld in thematische modules. `style.css` bundelt ze via
`@import` — de HTML laadt alleen `style.css`, dus daar hoef je niets aan te wijzigen.

| Bestand           | Waarvoor                                                                 |
|-------------------|--------------------------------------------------------------------------|
| `style.css`       | Bundelt alle modules via `@import`. **Hier zelf geen stijlen plaatsen.**  |
| `base.css`        | Kleurvariabelen (`:root`), reset, `body`, basis-typografie               |
| `navigation.css`  | De vaste navigatiebalk bovenaan                                          |
| `hero.css`        | Hero-sectie, branding en de drie video-cards                             |
| `iphone.css`      | De iPhone-mockup (frame, notch, scherm, knoppen, reflecties)             |
| `sections.css`    | Algemene secties + problem/solution, how-it-works, values, mission, vision |
| `signup.css`      | De voorinschrijvingssectie (gebruiker/verhuurder, postcode, e-mail)      |
| `contact.css`     | Contactsectie en footer                                                  |

## Werkwijze

- **Een kleur aanpassen voor de hele site?** → `base.css`, pas de variabele in `:root` aan.
- **Een specifieke sectie aanpassen?** → open de bijbehorende module hierboven.
- **Een nieuwe sectie toevoegen?** → maak een nieuwe module, voeg een `@import`-regel toe
  aan `style.css` op de juiste plek (de volgorde bepaalt de cascade).

## Let op: volgorde

De `@import`-volgorde in `style.css` is de cascade-volgorde. `base.css` staat
bewust bovenaan (variabelen en reset eerst). Herschik de imports niet zonder reden;
specifiekere regels lager in de lijst kunnen eerdere overschrijven.
