---
isKeyLocation: "false"
partOfLocation: "[[Muinaisten metsä]]"
tags:
  - location
---

### Musiikki
https://www.youtube.com/watch?v=R602-QupieM&t=0s


##### Tapahtumapaikka (Muutama lause mitä pelaajat näkee):

Olette kaupungissa joka näyttää siltä että sitä ei ole rakennettu. Se näyttää siltä että metsä itse on luonut sen. 
Jotkut talot näyttävät puilta, toiset suurilta kiviltä joissa on ovet ja sammalverhot.
Tiet muodostuvat juurista ja ovat yllättävän tasaisia kävellä.


Keskellä kaupunkia kasvaa jättimäinen puu ja muu kaupunki on rakentunut sen ympärille.


Kun astutte kaupunkiin sisään, metsän äänet hiljenevät pikkuhiljaa. Jäljellä on vain rytmikäs hyräily, joka tuntuu rinnassa.



##### **Interaction/Activity:** (Something for them to _do_ other than talk. e.g., "A game of cards," "A jammed door," "A leaking pipe.")
Jos pelaajat menee suuren puun luo, he löytävät tutun näköisen hahmon. [[Sisar Arelen Lyra (MUINAINEN)]] on siellä, muuttunut osaksi puuta lantiosta alaspäin.



##### **NPCs Present:** (Who is usually here?)
[[Sisar Arelen Lyra (MUINAINEN)]]

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
