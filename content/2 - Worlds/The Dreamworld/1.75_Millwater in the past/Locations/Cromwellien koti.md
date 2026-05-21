---
isKeyLocation: "false"
partOfLocation: "[[Millwater]]"
tags:
  - location
---


---  
_Use this for any basic location



##### The setting (Few sentences of what players see):
Pieni vaatimaton mökki sahan yläpuolella. 
Tupa koostuu yhdestä huoneesta jonka keskellä on ruokapöytä.
Reunalla on sängyt ja tulisija.
Talo on selvästi köyhä.


##### **NPCs Present:** (Who is usually here?)
[[Kaylein Cromwell]],
[[Merek Cromwell]],
[[Dain Cromwell]]

---


### Triggers/Clues

```dataviewjs
const { MarkdownRenderer } = require("obsidian");

// Get a reference to the current file's link for the 'contains' check
const currentFileLink = dv.current().file.link;
const parentLocation = dv.current().partOfLocation;

// 1. Filter: Tagged #trigger AND AvailableLocations contains a link to THIS file
const pages = dv.pages()
    .where(p => {
        // Must have the #trigger tag
        if (!p.file.tags.includes("#trigger") || !p.AvailableLocations) return false;
        
        // Convert AvailableLocations to a dataview array for easy searching
        const avail = dv.array(p.AvailableLocations);
        
        // Check if it matches this file OR this file's parent location
        const matchesCurrent = avail.includes(currentFileLink);
        const matchesParent = parentLocation && avail.includes(parentLocation);
        
        return matchesCurrent || matchesParent;
    });

const result = pages.map(p => {
    // We construct the Meta Bind syntax for a toggle
    // This targets the "triggered" field in the specific file path
     const metaBindToggle = `\`INPUT[toggle:${p.file.name}#Triggered]\``;

    
    return [
        p.file.link,
        p.ClueToDrop,
        p.PrimaryNPC,
        metaBindToggle
    ];
});

dv.table(["Note", "Clue to drop", "Primary NPC", "Triggered Status"], result);
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
