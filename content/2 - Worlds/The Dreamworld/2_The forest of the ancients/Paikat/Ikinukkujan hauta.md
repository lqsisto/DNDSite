---
isKeyLocation: "false"
partOfLocation: "[[Muinaisten metsä]]"
tags:
  - location
---

##### Tapahtumapaikka (Muutama lause mitä pelaajat näkee): 
sumun keskeltä paljastuu aukio, joka on täynnä puumaisia hahmoja jotka ovat kumartuneet eteenpäin.
Edessä näkyy tumma hahmo joka paljastuu jättimäiseksi hirveksi, joka on suurimmaksi osin uponnut suohon. Sen silmät ovat kiinni ja se hengittää raskaasti.

Suon kosteaan löyhkään sekoittuu eläimen hajua. 
Puumaiset olennot laulavat hirvelle



##### **Tunne:** (Kotoisa, Kireä, Kiireinen, Karmiva).
Samaan aikaan surullinen, mutta rauhallinen


##### **Interaction/Activity:** (Something for them to _do_ other than talk. e.g., "A game of cards," "A jammed door," "A leaking pipe.")
Jos pelaajat yrittää mennä liian lähelle, Muinaiset nousee ylös vihaisena ja estää kulun.

##### **NPCs Present:** (Who is usually here?)
[[Ikinukkuja]]

---


### Triggers/Clues


```dataview
TABLE
PrimaryNPC as "NPC",
Clues as "vihjeet"


FROM #clue 
where AvailableLocations!=null AND contains(AvailableLocations,this.file.link) OR contains(AvailableLocations, this.partOfLocation)
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
