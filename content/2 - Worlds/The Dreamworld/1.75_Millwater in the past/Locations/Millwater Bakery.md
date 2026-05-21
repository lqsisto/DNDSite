---
isKeyLocation: "false"
partOfLocation: "[[Millwater]]"
tags:
  - location
---


##### **Framing & Sensory:**
- **Edessä on suuri tiski, jonka päällä on erilaisia tuoreita leipomuksia: leipiä, kakkuja, keksejä**
- **Takahuoneessa oleva tuli luo varjoja seiniin.**
- **Takahuoneesta kuuluu  matalaa hyräilyä

##### **The Vibe:** (Cozy, Tense, Busy, Eerie).
+ Rauhallinen, hieman aavemainen

##### **Interaction/Activity:** (Something for them to _do_ other than talk. e.g., "A game of cards," "A jammed door," "A leaking pipe.") **Don't plan these out. Just write one sentence.**
- Hiiri juoksee oven edestä kun pelaajat astuvat sisään. Sillä on keksi suussa.

##### **NPCs Present:** (Who is usually here?)
- [[Garuk Doughfist]] - Leipomon omistaja

---


### Bakery Prices
[[Millwater Bakery Prices]]


---

### Triggers/Clues

```dataview
TABLE
PrimaryNPC as "NPC",
Clues as "vihjeet"


FROM #clue 
where contains(AvailableLocations,this.file.link) OR contains(AvailableLocations, this.partOfLocation)
```

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
