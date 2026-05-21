---
isKeyLocation: "false"
partOfLocation: "[[Millwater]]"
tags:
  - location
---




# **Inn Description:** 
Warm, crowded, smells of bread, lake fish, and damp wool. The common room is always loud — laughter, arguments, chairs scraping, tobacco smoke and mead


# Millwater Inn:

- ### Detail:
	- All food made here is EXTREMELY GOOD for some reason...
- ### Clue:
	- [[Innkeeper Cilia Tolla]] has a small book behind the counter she's written down names of all Ivory Sentinels who have started acting weird.
	- [[Sisar Arelen Lyra]] is worried about the construction



### **Inn Keeper Name and Description:** [[Innkeeper Cilia Tolla]]

### Triggers:**

- #### Innkeeper rumors
	- [[Innkeeper Cilia Tolla]]'s Dear friend, [[Sisar Arelen Lyra]] is worried about the tower the sentinels are building. 
	- "She went there this morning to bless the construction site, but she left halfway through."
### Price per night: 2 Eyes/ 1 Door (5 sp)

### [[food-drink-and-lodging]]


##### **Framing & Sensory:**
- Eteisestä nousee pienet portaat baarin puolelle. Ympärillä on paljon pöytiä, paljon ihmisiä ja kova tungos  
- Naurua, tupakan ja kuivuneen oluen hajua. Jostain kuuluu musiikkia
- Baari on hämärä, mutta jokaiseen pöytään on sytytetty kynttilä ja muuallakin palaa soihtuja.

##### **The Vibe:** (Cozy, Tense, Busy, Eerie).
+ Todella kiireinen, iloinen

##### **Interaction/Activity:** (Something for them to _do_ other than talk. e.g., "A game of cards," "A jammed door," "A leaking pipe.")
+ Joku heittää todella pihkaisen puun takkaan ja joku toinen kirkaisee 
	+ ###### "WATCH OUT, ARE YOU TRYING TO BURN THE WHOLE PLACE UP AGAIN?"

##### **NPCs Present:** (Who is usually here?)
+ [[Innkeeper Cilia Tolla]]

---

### Triggers/Clues

```dataview
TABLE
PrimaryNPC as "NPC",
Clues as "vihjeet"


FROM #clue 
where contains(AvailableLocations,this.file.link) OR contains(AvailableLocations, this.partOfLocation)
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

