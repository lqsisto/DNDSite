---

---



## Overview
> *This would be a quick description of what this location is all about. What is the hook that attracts the party to it? What is the general idea that you want to accomplish?.*

**name**:: <% tp.file.title %>
**type**:: Metsä
**notableFeatures**:: (Unique landmarks, dangers, magic effects)
**currentState**:: (Peaceful, under siege, cursed, etc.)
**isKeyLocation**:: INVALID_VALUE
**partOfLocation**:: [location name]
**tags**:: #location 

---

## Points of Interest

```dataview
TABLE
type as "Type"


WHERE partOfLocation = this.file.link
```

---

## NPCs

> [!NPCs]+ NPCS
> ```dataview
> TABLE
> rows.AvailableLocations[0] as "Paikat",
> rows.race[0] as "Rotu",
> rows.ConnectedQuests[0] as "Tehtävät"
> FROM #npc 
> FLATTEN AvailableLocations as L 
> WHERE L = this.file.link OR L.partOfLocation = this.file.link 
> GROUP BY file.link
> ```






---

## Encounters & Events

> [!Quests]+ Quests
> ```dataview
TABLE
Vaatimukset,
Tapahtuma,
MitäPitääTehdä as "Mitä pitää tehdä",
josEpäonnistuu as "Jos epäonnistuu"
FROM
#activity 
WHERE partOfLocation = [[Muinaisten metsä]]
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
