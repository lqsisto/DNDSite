---
isKeyLocation: "false"
partOfLocation: "[[Muinaisten metsä]]"
tags:
  - location
---

##### Tapahtumapaikka (Muutama lause mitä pelaajat näkee):

Tulette tuoreelle leiripaikalle, joka ei voi olla kuin vain muutaman tunnin vanha.
Se on rakennettu turvallisesti kalliolle, hyvin samalla tavalla kuin se, jonka rakensitte tien viereen.

Keskellä leiriä on nuotiopaikka, jonka hiilet tuntuvat edelleen hieman lämpimiltä. 
Nuotiopaikan ympärillä on hujan hajan oksia, joka on ehkä ollut makuusija.


+ Selvästi lähdetty kiireellä
+ Maassa nuotiopaikan vieressä on pakki, joka näyttää Nimuen silmään tutulta.
+ Yhden puun rungossa on selvät veriroiskeet

+ **Investigation check DC 8:** paljastaa pienen paperinpalan joka on selvästi kirje. Se on revennyt ja ainut mitä siinä lukee on
  "Nimue, ole..."

+ **Survival check DC5:** paljastaa että leiristä on paennut kaksi henkilöä
+ **Survival check DC10:** paljastaa että leiristä paenneet henkilöt astuivat samalla, lähes identtisellä tavalla.



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
