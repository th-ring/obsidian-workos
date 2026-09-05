---
type: note
title: "ChatGPT Theme Showcase"
category: "concept"
workstream: null
created: "2026-09-05"
updated: "2026-09-05"
tags:
  - "theme"
  - "chatgpt"
  - "design-system"
agent_state: "idle"
locked_by: null
locked_at: null
---

# ChatGPT Theme Showcase & Guide

Willkommen im **ChatGPT Theme** für Obsidian WorkOS. Dieses Theme überträgt das ruhige, elegante und klinisch-moderne Design von OpenAI ChatGPT auf deine Notizen – ohne Obsidian in ein reines Chat-Interface zu verwandeln.

---

## 🎨 Typografie & Überschriften

Die Typografie basiert auf **Söhne / Inter** mit präzisen, leicht negativen Laufweiten (`letter-spacing: -0.015em`) für maximale Lesbarkeit.

### Ebene 3 Überschrift
Fließtext fließt ruhig mit `line-height: 1.65` und angenehmer Lesezeilenbreite. Obsidian bleibt ein reines Markdown- und Wissenswerkzeug, das sich nahtlos in deinen täglichen Workflow einfügt.

#### Ebene 4 Überschrift
- Saubere Aufzählungspunkte
- Dezente Einrückungen und weiche Kontraste
- Perfekte Harmonie zwischen Text und Leerraum

---

## 🔘 Interaktive Elemente & Tags

Pillenförmige Tags mit sanfter Akzenttönung:
#theme #chatgpt #design-system #workos

### Task-Listen & Checkboxen
- [x] Farbsystem aus ChatGPT Dark- & Light-Mode Screenshots extrahieren
- [x] 8-Farben ChatGPT Akzentsystem implementieren
- [x] Vollwertiges `theme.css` mit Style Settings Support erstellen
- [ ] Eigene Notizen im neuen Look erfassen

---

## 💻 Code-Blöcke

Code-Blöcke besitzen abgerundete Ecken (`12px`), dezente Hairline-Borders und einen dunklen Hintergrund:

```typescript
// OpenAI ChatGPT Token Architecture
interface ChatGPTTokens {
  canvas: string;
  surface: string;
  accent: string;
  borderRadius: "9999px" | "16px" | "12px" | "8px";
}

const activeTheme: ChatGPTTokens = {
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
| **Grün** (Default) | `#10A37F` | Dark & Light | Aktiv |
| **Blau** | `#3B82F6` | Dark & Light | Verfügbar |
| **Gelb** | `#EAB308` | Dark & Light | Verfügbar |
| **Rosa** | `#EC4899` | Dark & Light | Verfügbar |
| **Orange** | `#F97316` | Dark & Light | Verfügbar |
| **Violett** | `#8B5CF6` | Dark & Light | Verfügbar |

---

## 💬 Optionale ChatGPT-Callouts

Für KI-gestützte Dokumentationen oder Dialoge können spezifische Callouts genutzt werden:

> [!user] Benutzerfrage
> Wie binde ich das ChatGPT-Theme in Obsidian ein?

> [!assistant] ChatGPT Antwort
> Das Theme ist bereits in `.obsidian/themes/ChatGPT/` installiert und in deinen Einstellungen aktiviert. Du kannst die Akzentfarben über das Plugin *Style Settings* jederzeit anpassen.

---

> [!tip] Tipp
> Öffne die Obsidian-Einstellungen (`Strg + ,`), um das 2-spaltige Einstellungsmenü mit runder Suchleiste und ChatGPT-Toggles live zu erleben!
