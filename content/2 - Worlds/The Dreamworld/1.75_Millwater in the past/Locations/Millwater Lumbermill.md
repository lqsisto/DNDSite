---
isKeyLocation: "false"
partOfLocation: "[[Millwater]]"
tags:
  - location
---

_Use this for any basic location


- **Name & Type:** Millwater Lumbermill
- **First Impression:**
	- **3 details to spark description**

	- **2 active elements**
		- In the back is a big warehouse where workers are carrying freshly cut wood
		- Carriages pull freshly cut trees in to the area
	- **1 mood keyword** (tone or feeling you want to convey)
		- Busyness
		- Hard work
- **NPCs**
	- [[Heswyse 'Hes' Ylofyx Rosikini]] - The owner of the Lumbermill
	- Random workers



- **Where It Leads:** (connected places / exits)



##### **Framing & Sensory:**
- Suuri piha täynnä puuta eri muodoissa, tukkeja, lankkuja ja kaikkea siltä väliltä.
- Työmiehet huutaa, työkalut kolisee, kaikkialla haisee puu ja pihka
- Keskellä pihaa sahakouru ja terä joka liikkuu itsekseen

##### **The Vibe:** (Cozy, Tense, Busy, Eerie).
+ Kiireinen, kireä


##### **NPCs Present:** (Who is usually here?)
- [[Heswyse 'Hes' Ylofyx Rosikini]]



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
