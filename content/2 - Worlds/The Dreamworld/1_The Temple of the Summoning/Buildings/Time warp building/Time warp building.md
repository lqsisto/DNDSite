## Overview
> 1 player teleports into a room that is the dilapidated building thousands of years ago.

**name**:: Time warp building
**type**:: house
**notableFeatures**:: (Unique landmarks, dangers, magic effects)
**currentState**:: (Peaceful, under siege, cursed, etc.)
**isKeyLocation**:: false
**partOfLocation**:: [[Temple Complex of Summoning]]
**tags**:: #location 
musicLink::https://www.youtube.com/watch?v=orgikrTCKTc&list=PLPkQh2SAuabEi2pGCrbE14Zl-x8yW2EgJ&t=0s

---     

### Locations

#### 1. The teleport room/backroom
- Filled with books that are all written in [[Old language]].
- A blue mattress on the floor

#### 2. Study
- **Fireplace**
- **a desk**
	- **->** all kinds of potions, written notes about how to make potions stronger by boiling water out.
- **Shelf filled with potions** -> IF DRINKS, GENERATE RANDOM POTIONS
- **chest**
	- -> Filled with spellbooks [[Time warp building study chest]]
- **two doors** -> One outside, one deeper to the houses
	- **-> WHEN APPROACHING ONE OF THE DOORS, [[Fiona Archton]] APPEARS:

> [!readaloud] 
> 	"WOW ARE YOU A REAL PRINCE/PRINCESS???"
> 	"EEEEEK A MONSTER"

#### 3. Livingroom
- **Big table
	- -> two plates with food on them. one small, one big
- **Sofa, looks comfortable**
- **A fancy chair next to the fireplace**

#### 4. Kitchen
- [[Silas Archton]] was cooking
- **Fresh ingredients on the table**
	- -> Meat, potatoes, bread

---

## NPCs

> [!NPCs]+ NPCS
>
> ```dataview
> TABLE
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

