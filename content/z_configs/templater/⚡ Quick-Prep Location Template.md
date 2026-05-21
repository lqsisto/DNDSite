---
isKeyLocation: "false"
partOfLocation:
tags:
  - location
---


_Use this for any basic location



##### Tapahtumapaikka (Muutama lause mitä pelaajat näkee):

##### **Framing & Sensory:**
- **The Centerpiece:** (The one big thing).
- **The Evidence of Life:** (One detail showing people live here).
- **The Senses:** (Smell/Sound).
- **The Future Echo:** (How is this different from the ruins?)

##### **Tunne:** (Kotoisa, Kireä, Kiireinen, Karmiva).

##### **The "Information Gravity":** (What clue lives here? Remember: if they miss this place, move the clue somewhere else!)

##### **Interaction/Activity:** (Something for them to _do_ other than talk. e.g., "A game of cards," "A jammed door," "A leaking pipe.")

##### **NPCs Present:** (Who is usually here?)

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
