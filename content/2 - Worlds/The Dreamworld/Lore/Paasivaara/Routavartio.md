---
isKeyLocation: "false"
partOfLocation: "[[Paasivaara]]"
tags:
  - location
---


_Use this for any basic location



##### Tapahtumapaikka (Muutama lause mitä pelaajat näkee):

##### **Framing & Sensory:**
- **The Centerpiece:** Pienehkö linnake jonka reunassa on torni. Pihassa on sotilaita harjoittelemassa
- **The Senses:** Nenään haisee soihduissa palavan öljyn haju joka sekoittuu hevosen lantaan. Kuulette kuinka komentaja huutaa käskyjä sotilaille

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
