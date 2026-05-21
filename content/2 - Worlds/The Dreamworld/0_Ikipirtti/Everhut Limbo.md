**isKeyLocation**:: false
**name**:: <% tp.file.title %>
**partOfLocation**:: [[Everhut]]

---  
_Use this for any basic location



##### The setting (Few sentences of what players see): 
Kaikki muuttuu sumuiseksi ja harmaaksi. 
Mitä pidemmälle sumussa kulkee sitä vaikeampi on nähdä eteensä.

Myös äänet alkaa puuroutua.



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
