---
isKeyLocation: "false"
partOfLocation: "[[Millwater]]"
tags:
  - location
---




##### The setting (Few sentences of what players see): 
Edessä on kallio joka näyttää siltä että se ei kuuluisi siihen. 
Edessä on portaat jotka on louhittu kallioon. N. 10 Metrin korkeudessa on tasanne jonka päällä on kaksi pilaria, ja niiden keskellä soihtu
Ympärillä kuuluu työmiehien huutoa ja kiroilua.
Joku Ivory Sentineleistä huutaa miehelle joka on juuri kaatanut kottikärryllisen kiviä vahingossa maahan. Mies näyttää siltä että  lyö häntä kohta.


##### **The Vibe:** (Cozy, Tense, Busy, Eerie).
Kireä, kiireinen


##### **NPCs Present:** (Who is usually here?)
[[Sir Calen Dreth]]

---


### Juhla


Ihmiset kerääntyvät ympäri soihtua. Jotkut seisovat portailla, jotkut niiden alapäässä.

+ Sir Calen Dreth seisoo väkijoukon keskellä, nostaa molemmat kätensä ilmaan ja odottaa hiljaisuutta.

"*Rakkaat ystävät! Me olemme tehneet sen, Me olemme voittaneet kuoleman*" [Korruptoituneet Ivory sentinelit huutaa "HURRAA"]
"*Tästä päivästä eteenpäin, kukaan meistä ei tule kuolemaan. Voimme unohtaa hautajaisemme ja perinteemme, surun, menetyksen ja ikävän.*"
"*Kun jotkut meistä rukoilivat hiljaisia jumalia, me toimimme. Menimme pidemmälle kuin kukaan muu, syvemmälle kuin kukaan koskaan aiemmin*"
"*Sieltä me löysimme vastauksen. Oman jumalattaremme joka kiitoksena palveluksistamme antoi meille vastineeksi ikuisen elämän.*"
"*Katsokaa!" 
[Sir Calen kävelee reunalle ja hyppää teatraalisesti alas.]
[Hetkeen ei tapahdu mitään.]
[Sitten...]                                                    Musiikki (muista loopata): https://www.youtube.com/watch?v=SN4dshTxWqg
[Ensin pieni kipinä, sitten tuli]
[Roihu, Tulipatsas]  Jotkut Sentinelit ottaa peloissaan askelia taaksepäin
[JÄRKYTTÄVÄ TULIPATSAS] Lähellä olevat Sentinelit syttyy palamaan, ihmiset lähtee pakenemaan
[Keskelle tulta ilmestyy tumma siluetti kuin tyhjästä ja sen perässä lisää. Samalla palaneet, äsken kuolleet ruumiit alkavat nousta ylös]  Ihmiset kirkuu, tuli jatkaa palamista.

Musiiikki (muista loopata) : https://www.youtube.com/watch?v=uGIK6dAe2Ko


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
