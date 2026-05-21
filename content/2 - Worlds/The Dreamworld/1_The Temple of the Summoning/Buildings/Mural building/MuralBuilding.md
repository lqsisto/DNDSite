## Overview
> *Ancient temple dedicated for the Nightmare queen. Now in ruins.*

**name**:: Mural building
**type**:: Ruined building
**notableFeatures**:: "North western wall broken, pillar poking out", "The entrance is completely covered with different kinds of plants" 
**currentState**:: Peaceful, ruin
**isKeyLocation**:: false
**partOfLocation**:: [[Temple Complex of Summoning]]
**tags**:: #location 
**mapLink:: [[]]
songLink::https://www.youtube.com/watch?v=205meIww0zg&list=PLPkQh2SAuabEhQhgoDdOfimLSsud2Dz2L&index=2&t=0s

---

## Points of Interest
#### Vibe
- **Dusty, dark**
####  Smell:
- **Mold, wet, sand**


### Entrance

- #### Room purpose: 
	- entrance
- #### Things you can see:
	- A broken pillar in the middle of the room
	- Pots between the pillar and the wall; One pot is broken
	- A broken statue on the corner.
	- 2 pathways
			- One pathway has collapsed , but moving the rocks is possible
			- Second pathway seems stable and can be used. There's lots of rubbish on the floor

> [!caution]+ Moving the rocks
> DC15 STR Check
> OR
> Take another route from outside the building

### The rubbish path

- #### Room purpose: 
	- Something to do with the seal on the floor; a mystery

- #### Things you can see:
	- Dead end
	- Weird mark on the ground, stones fallen on top
		 

> [!danger]+  When interacted with the seal: 
> - Sudden yellow flash comes out of it and the building trembles
> - You can hear an enormous crack from the next room
> 	- [[MuralBuilding#The room with broken floor]] the floor cracks and the spikes became visible




### The middle room
- #### Things you can see:
	- Big empty room
	- Floor has big cracks on it
	- Another pillar on the floor

- ##### The broken trap
	- **If already visited in the rubbish path:**
		-> The floor is open and old rusty spikes are visible
	- **If not:**
		-> The floor cracks with the first step and reveals the spikes

> [!warning]+ DC 15 DEX not to fall
> If falls - Respawn tutorial


### The room with broken floor

- #### Room purpose: 
	- Looks like a hall

- #### Things you can see:
	- The room's floor is **completely broken**, you can see **huge cracks on the floor and you're sure you will fall on your death if you walk there**
	- ##### On the floor there is:
		- Sturdy looking ancient pillar
		- A rectangular rock near you that also looks very sturdy
		- Bunch of rocks on the spot where the floor is broken down the most
		- At the far end of the room you can see three bookshelves that have somehow stood against time
		- A door that is partly open. Dim green light can be seen from the inside

> [!warning]+ The floor navigation puzzle
> -  ##### **Perception/Investigation Checks** (DC 12-15) reveal details like:
> 	- Some rocks are **loose** and might slide if stepped on.
> 	- Certain pillar fragments are **sturdy** enough to hold weight.
> 	- Cracks in the floor grow larger if too much weight is near them.
> - ##### **Environmental Danger**
> 	- Add tension with a **progressive collapse** mechanic.
> 	- After every two turns, roll a **d6**:
> 		- On a 5-6, a section of the floor collapses (decided by you or at random).
> 		- This could cut off routes, forcing players to adapt quickly.
> 		- Alternatively, if players spend too long thinking, have **small chunks fall** to keep the pressure on.


### The sacrifice room

- #### Room Purpose:
	- The hall continues to here too
- #### Things you can see
	- Another pillar has collapsed in the middle of the room
	- A pile of scraps on the on end
	- A big stone near the far wall. The wall looks like it has something written on it
		- Also there's something that looks like a skeleton laying on the rock

> [!danger]+ When skeleton is interacted with
> DC10 Medicine check tells that the skeleton is ancient 


### The room with the mural

**SONG LINK**:: https://www.youtube.com/watch?v=2vjrhUcNy8k&list=PLPkQh2SAuabGrIpj-fbqJfIIbVc7gP1fi&index=2&t=0s


> [!danger]+ When the door is interacted with
> There's a faint blue smoke on the door way.
> If continued through, they get to a room that looks completely alive

- #### Vibe:
	- **Fresh, clean**
	- Absolutely nothing moves, as if the whole world has stopped
	- **Smells**: weird herbs, ink, stearine 
- #### Room Purpose:
	- A study
- #### Things you can see
	- Bookshelves, both sides of the doorway
	- Stone table on the right side of the room
		- On the table there are:
			- A scroll that looks magical ([[heroism|Heroism]])
			- 3 potions:
	
				| Name                            | Description | Strength | Side Effect|
				| ------------------------- | ------------- | --------- | --------- |
				| Tonic of Babelfish.         | Lets the user speak any language but not understand it.    | Minor with a slight side effect. | causes the skin to crack and appear distorted. |
				| Elixir of Giant Strength.       | It gives the user much more strength.     | Minor with a strong side effect. | causes recklessness.
				| Brew of Beautiful appearance.  | Makes the user appear more attractive for a time. | Temporary but strong and wears off quickly.| Causes immobilisation


	- A prayer bench in front of you
	- ***On the backwall, there's a mural of a young, unnaturally skinny girl***
		- The girl has black hair and friendly face
		- Green eyes
		- Holding a green rose
		- Her eyes look... wrong Almost as if she was actually looking at you

> [!danger]+ When players go near the mural
> [[mural guardian]] appears
> 

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

## Links
- **Dashboard:** [[Campaign Dashboard]]
- **Next Location:** [[Next Area]]
- **Connected Quests:** [[Quest Name]]
