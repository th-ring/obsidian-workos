---
type: note
title: "WorkOS Theme Showcase"
category: "concept"
workstream: null
created: "2026-09-05"
updated: "2026-09-22"
tags:
  - "theme"
  - "workos"
  - "design-system"
agent_state: "idle"
locked_by: null
locked_at: null
---

# WorkOS Theme Showcase & Guide

Willkommen im **WorkOS Theme** für Obsidian. Dieses Theme kombiniert ein ruhiges, elegantes und minimalistisches Design mit moderner Typografie für fokussiertes Arbeiten und PKM (Personal Knowledge Management).

---

## 🎨 Typografie & Überschriften

Die Typografie basiert auf eingebetteter **Inter** mit präzisen, leicht negativen Laufweiten (`letter-spacing: -0.015em`) für maximale Lesbarkeit.

### Ebene 3 Überschrift
Fließtext fließt ruhig mit `line-height: 1.65` und angenehmer Lesezeilenbreite. Obsidian bleibt ein reines Markdown- und Wissenswerkzeug, das sich nahtlos in deinen täglichen Workflow einfügt.

#### Ebene 4 Überschrift
- Saubere Aufzählungspunkte
- Dezente Einrückungen und weiche Kontraste
- Perfekte Harmonie zwischen Text und Leerraum

---

## 🔘 Interaktive Elemente & Tags

Pillenförmige Tags mit sanfter Akzenttönung:
#theme #workos #design-system

### Task-Listen & Checkboxen
- [x] Farbsystem mit dezenten Dark- & Light-Modi
- [x] 8-Farben WorkOS Akzentsystem implementieren
- [x] Vollwertiges `theme.css` mit Style Settings Support erstellen
- [ ] Eigene Notizen im neuen Look erfassen

---

## 💻 Code-Blöcke

Code-Blöcke besitzen abgerundete Ecken (`12px`), dezente Hairline-Borders und einen dunklen Hintergrund:

```typescript
// WorkOS Token Architecture
interface WorkOSTokens {
  canvas: string;
  surface: string;
  accent: string;
  borderRadius: "9999px" | "16px" | "12px" | "8px";
}

const activeTheme: WorkOSTokens = {
  canvas: "#171717",
  surface: "#212121",
  accent: "#10A37F",
  borderRadius: "9999px",
};
```

---

## 📊 Tabellen

| Akzentfarbe | Hex-Code | Modus | Status |
| :--- | :--- | :--- | :--- |
| **Emerald Grün** (Default) | `#10A37F` | Dark & Light | Aktiv |
| **Blau** | `#3B82F6` | Dark & Light | Verfügbar |
| **Gelb** | `#EAB308` | Dark & Light | Verfügbar |
| **Rosa** | `#EC4899` | Dark & Light | Verfügbar |
| **Orange** | `#F97316` | Dark & Light | Verfügbar |
| **Violett** | `#8B5CF6` | Dark & Light | Verfügbar |
| **Weiß / Monochrome** | `#FFFFFF` | Dark & Light | Verfügbar |
| **Schiefergrau** | `#6E6E80` | Dark & Light | Verfügbar |

---

## 💬 Optionale Callouts

Für Dokumentationen oder Dialoge können spezifische Callouts genutzt werden:

> [!note] Hinweis
> Das Theme ist direkt in `.obsidian/themes/WorkOS Theme/` vorinstalliert und in deinen Einstellungen aktiviert. Du kannst die Akzentfarben über das Plugin *Style Settings* jederzeit anpassen.

---

> [!tip] Tipp
> Öffne die Obsidian-Einstellungen (`Strg + ,`), um das 2-spaltige Einstellungsmenü mit runder Suchleiste und Schaltern live zu erleben!
