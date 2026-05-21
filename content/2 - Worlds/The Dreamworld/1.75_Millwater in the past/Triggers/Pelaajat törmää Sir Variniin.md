---
Name: <% tp.file.title %>
Triggered: false
AvailableLocations:
  - "[[Millwater Inn]]"
ClueToDrop:
  - "[[Sir Calen Dreth työskentelee Nightmare Princess]]"
  - "[[Brazier jota rakennetaan on paha]]"
PrimaryNPC: "[[Sir Calen Dreth]]"
tags:
  - trigger
---
> [!kanban]+ Trigger Information
> -  **Trigger: **(What players do)
> 	- Players walk to the bar door. 
> - **Reaction:** (How the world reacts)
>   - Whoever is the first takes a dex save DC10 to avoid suddenly opening bar door
>  - **The** "Uh-Oh": (If they fail or ignore the threat)
> 	- **d4 dmg** - Baarin ovi kolahtaa suoraan otsaan
> - **The** Aftermath: What happens after
> 	- ###### "Watch it idiot, don't you know I'm a busy man!"
> 		  Samalla hänen oikeassa kädessään oleva vihreä silmä näkyy hetken aikaa.

```dataview 
TABLE

VisualClues as "Visual Clues"

FROM #clue
WHERE contains(this.ClueToDrop, file.link)
```







**The Delivery:** 

## 🌫️ **Trigger: (What players do)
Players walk to the bar door. 

## 💥 Reaction: (How the world reacts)
**Whoever is the first takes a dex save DC10 to avoid suddenly opening bar door

## ⚠️ The "Uh-Oh": (If they fail or ignore the threat)
**d4 dmg** - Baarin ovi kolahtaa suoraan otsaan

## ⚡ The Aftermath: What happens after
Sir calen dreth says:
###### "Watch it idiot, don't you know I'm a busy man!"

Samalla hänen oikeassa kädessään oleva vihreä silmä näkyy hetken aikaa.




---

## Tables
- Books: [[Book table]]
- Plants: [[Random plants table]]
- Worthless loot: [[Worthless loot table]]

## Links
- **Dashboard:** [[Campaign Dashboard]]
- **Next Location:** [Next Area]
- **Previous Location:** [Previous Area]

- **Premade NPCs** [[Premade NPCs]]

--- 
