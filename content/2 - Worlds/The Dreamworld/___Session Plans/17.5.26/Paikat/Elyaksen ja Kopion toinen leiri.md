---
isKeyLocation: "false"
partOfLocation: "[[Muinaisten metsä]]"
tags:
  - location
---
#### Tapahtumapaikka (Muutama lause mitä pelaajat näkee):

Tulette toiselle leiripaikalle, joka on rakennettu metsäaukiolle suurten puiden ympärille.
Myös tämän leirin keskellä on nuotio, mutta verrattuna edelliseen leiriin tämä on paljon paremmassa kunnossa.

Nuotion sivulle on rakennettu yksinkertainen suoja jonka alla on kaksi selvää painaumaa. Tässä leirissä on nukkunut kaksi henkilöä.






#### **Framing & Sensory:**
- **The Centerpiece:** (The one big thing).
- **The Evidence of Life:** (One detail showing people live here).
- **The Senses:** (Smell/Sound).
- **The Future Echo:** (How is this different from the ruins?)

---


### Triggers/Clues


```dataview
TABLE
PrimaryNPC as "NPC",
Clues as "vihjeet"


FROM #clue 
where AvailableLocations!=null AND (contains(AvailableLocations,this.file.link) OR contains(AvailableLocations, this.partOfLocation))
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
