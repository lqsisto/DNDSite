## Overview
> A magical safehouse players found. It has magical rooms

**name**:: Everhut
**type**:: Taikamökki
**isKeyLocation**:: true
**partOfLocation**:: [[Unen Reuna]]
**tags**:: #location 
**Musiikki**:: https://www.youtube.com/watch?v=tpi5qsXm_cM

---
	- Vibe: 
		- Cozy. Smells like tea, fresh food and thyme. Looks like it was built inside a tree. There are multiple trapdoors on each floor that take you to different rooms.
	- Detail:
		- In armory players can choose any basic weapon armor
		- In study something similar but for mages
	- Clue:
		- There are multiple items that could belong to the [[Inviter]]


## Points of Interest

```dataview
TABLE
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
- **Random Encounter Table:** (Optional)
- **Notable Past Events:** (Wars, disasters, mysteries)

---

## Links
- **Dashboard:** [[Campaign Dashboard]]
- **Next Location:** [Next Area]
- **Previous Location:** [Previous Area]
- **Connected Quests:** [Quest Name]

- **Premade NPCs** [[Premade NPCs]]
