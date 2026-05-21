 
## 🌍 **Current Location:** > [[Temple Complex of Summoning]] 
## 📌 **Quick Links** 
- 📜 **Story Summary:**  [[Main Story Overview]] 
- 🗺️ **World Map:** [[World Map]] 
- 📖 **Session Notes:** [[Session Notes]] 
- ⏳ **World Rules:** [[World Rules]]

---

- ## 🧙‍♂️ Players

```dataview
TABLE 
level as "Level", 
class as "Class"
FROM "1 - Players"
```

- ---

- ## 🏛️ **Key Locations** 

```dataview 
TABLE name as "Name",  type AS "Type"
FROM "2 - Worlds/The Dreamworld" AND #location
WHERE isKeyLocation=true
SORT name
```

---

## ⏳ **Session Notes**

```dataview
list

FROM #SessionNotes
sort file.mtime ASC
```

## 🏰 **Factions**

```dataview
table 
FROM #faction
```

## **Encounter Tables
##### **How to Use:**
- Roll a **d12** when an encounter is needed.
- Adjust difficulty based on **player level**.
- Some encounters are **combat**, others are **puzzles, environmental effects, or social**.
- For level-appropriate encounters, use the **CR scaling** guide in the table.

| [[1 - Generic Encounter Table (Any Location) 🎲]] |
| ------------------------------------------------- |
| [[2 - Forest of the ancients Encounter Table 🌲]] |
| [[3 - Mountain encounter Table ⛰️]]               |
| [[4 - Coldwatch & Castle Encounter Table ❄️]]     |
|                                                   |

## Secrets

##### Unassigned Secrets
```dataview
table
CoreFact as "Fakta",
Evidence

from #clue 
where AvailableLocations = null
```



## **Tools & Utilities**

- 🏹 **Loot & Items:** [[Treasure & Magic Items]]
- 🏰 **Factions & Politics:** [[Factions Overview]]

