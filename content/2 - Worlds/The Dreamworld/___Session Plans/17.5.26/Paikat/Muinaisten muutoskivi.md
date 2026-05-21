---
isKeyLocation: "false"
partOfLocation:
tags:
  - location
---

##### Tapahtumapaikka (Muutama lause mitä pelaajat näkee):
Metsäaukio joka on lähes täydellisen ympyrän muotoinen.
Sen sisällä ei kasva mitään kasveja, mutta paksut juuret kiemurtelevat ympäri kehää.
Keskellä kehää on suuri kivi jonka raoista hehkuu vihreää valoa, kuin hengittäen.



Kiven vieressä on kaksi Elyasta. Toinen (alkuperäinen)
makaa maassa ja toinen on polvistunut hänen vierelleen. Myös heidän välissään hohtaa vihreää valoa


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
