## Overview
> *A large temple standing on the North-Western side of the temple area.
> The biggest building in this area.
> There's a second floor that's partly collapsed.*

**name**:: Temple of reflections
**type**:: Ruined temple
**isKeyLocation**:: false
**partOfLocation**:: [[Temple Complex of Summoning]]
**tags**:: #location 
**mapLink:: [[]]
musicLink:: https://www.youtube.com/watch?v=6H2JbT4BRDU&t=0s

---

#### Vibe
- Peaceful, ancient church.
- Smells of plants, and moist
- wind throws around dust

#### Things you can see
- Big area
- Split in the middle with a wall
- On the right side there's a broken wall and behind that stairs that have seen better days
- Ancient hallways lead to other parts of the building
- On the other end of the building, there is a pool of water, torches on both sides


## Points of Interest

```dataview
TABLE
type as "Type",
Description

FROM "2 - Worlds"
WHERE partOfLocation = this.file.link
Sort type AND file.name DESC
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


> [!Quests]- Quests
>
> ```dataview
> TABLE WITHOUT ID
> startingLocation as "Starting Location",
> questGiver as "Quest Giver",
> objective as "Objective"
> 
> FROM #quest 
> WHERE startingLocation = this.file.link
> AND questGiver != "NPC name here"
> AND objective != "Objective here"
> ```
>
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

---

## Links
- **Dashboard:** [[Campaign Dashboard]]
