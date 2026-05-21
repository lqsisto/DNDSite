---
isKeyLocation: "false"
partOfLocation:
tags:
  - location
---


_Use this for any basic location



#### Tapahtumapaikka (Muutama lause mitä pelaajat näkee):
Kallioiden ympäröimä metsäinen aukio, jolla on selvästi taisteltu.
Maassa makaa Kalmankaartilaisia, joita osa on selvästi kuollut. 

Suurin osa heistä kuitenkin näyttää vain nukkuvan.



#### **Framing & Sensory:**
- **The Centerpiece:** Yhtä puuta vasten nojaa sotilas, joka on vielä hengissä. Hän hengittää tuskallisesti.
- **The Senses:** Maan ja metsän tuoksuun sekoittuu veri ja muut ruumiinnesteet.


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
