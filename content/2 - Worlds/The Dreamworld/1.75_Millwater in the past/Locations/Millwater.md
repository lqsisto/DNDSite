## Overview
> *Millwater on menneisyydessä oleva kylä johon pelaajat pääsevät kuljettuaan läpi aikaportaalista. Pelaajat todistavat täällä yhden taikasoihdun rakentamista.*

**name**:: Millwater
**type**:: Kylä
**notableFeatures**:: Rakennettu keskelle järveä. 
**currentState**:: Peaceful
**isKeyLocation**:: True
**partOfLocation**:: [[Unen Reuna]]
**tags**:: #location 
**Musiikki**:: https://www.youtube.com/watch?v=jyYnGLh5vL0

---



## Locations

```dataview
TABLE
type as "Type",
notableFeatures as "Features"

FROM #location 
WHERE partOfLocation = this.file.link
```


---

## NPCs

```dataview
TABLE
rows.AvailableLocations[0] as "Paikat",
rows.race[0] as "Rotu",
rows.ConnectedQuests[0] as "Tehtävät"


FROM #npc
FLATTEN AvailableLocations as L 
WHERE 
    L = this.file.link 
    OR 
    L.partOfLocation = this.file.link 
GROUP BY file.link
```



---

## Encounters & Events

> [!Quests]+ Quests
> ```dataview
TABLE WITHOUT ID
  file.link as "Quest",
  StartingLocation as "Starting Location",
  QuestGiver as "Quest Giver",
  Objective as "Objective"
FROM #quest 
WHERE (StartingLocation = this.file.link OR StartingLocation.partOfLocation = this.file.link )
> ```



> [!Encounters]- Encounters
>
> ```dataview 
> TABLE WITHOUT ID
> name as "Name",
> difficulty as "Difficulty",
> tags as "Type"
> 
> FROM #combat AND #social AND #puzzle AND #exploration
> WHERE location = this.file.link
> 
> ```
- **Random Encounter Table:** (Optional)
- **Notable Past Events:** (Wars, disasters, mysteries)

---

## Links
- **Dashboard:** [[Campaign Dashboard]]
- **Next Location:** [Next Area]
- **Previous Location:** [Previous Area]
- **Connected Quests:** [Quest Name]

- **Premade NPCs** [[Premade NPCs]]
