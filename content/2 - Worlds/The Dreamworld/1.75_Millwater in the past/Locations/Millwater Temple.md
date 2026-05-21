---
isKeyLocation: "false"
partOfLocation: "[[Millwater]]"
tags:
  - location
---
_Use this for any basic location



##### The setting (Few sentences of what players see): 
- Suuri kivestä tehty kaikuva tila, ulko-oven vastakkaisella seinällä suuri koristeellinen suihkulähde. 
- Tietä suihkulähteelle koristaa suuret kivestä tehdyt patsaat. Patsailla on tutut Ivory Sentinelien haarniskat.
- Kuulette hiljaisia ääniä ja haistatte jonkin erikoisen suitsukkeen.
- Vaikka rakennus on selvästi temppeli, se tuntuu kylmältä ja kostelta, Suuret koristeelliset ikkunat ja palavat soihdut yrittää tuoda tilaan lämpöä mutta sen avoimuus tuntuu hieman epämiellyttävältä. 
- Suihkulähteen ääressä on polvistuneita ihmisiä

##### 

##### **Interaction/Activity:** (Something for them to _do_ other than talk. e.g., "A game of cards," "A jammed door," "A leaking pipe.")
+ Pelaajat voi osallistua rukousrituaaliin [[Millwater Temple - Prayer ritual]]

##### **NPCs Present:** (Who is usually here?)
[[Sisar Arelen Lyra]]

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
