## Overview
> *Ivory Sentinelien linna

**name**:: <% tp.file.title %>
**type**:: 
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
>
> ```dataview
> TABLE WITHOUT ID
> name as "Name",
> race as "Race",
> role as "Role",
> class as "Class"
> 
> FROM #npc
> WHERE residence = this.file.link
> ```

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
