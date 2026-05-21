**isKeyLocation**:: false
**name**:: <% tp.file.title %>
**partOfLocation**:: [[Everhut]]
 
_Use this for any basic location


- **Sensory Snapshot:** (One smell, one sound, one visual).
	- Tuoksuu hieman tunkkaiselle, tuli rätisee takassa ja luo varjoja seinille. 
	- Keskellä huonetta on reikä josta näkee alempaan kerrokseen, mutta näky ei ole normaali, se vääristyy lievästi kuin katsoisi lasin läpi
	- **Lattiassa on kaksi lattialuukkua ja kahdet tikapuut
	- Huoneen reunoilla on kaapistoja


- **The Vibe:** (Cozy, Tense, Busy, Eerie).
	- Kotoisa, vaikuttaa siltä että huoneessa ei ole siivottu pitkään aikaan

- **Interaction/Activity:**
	- Nukkumispaikka


---

### Triggers

```dataviewjs
const { MarkdownRenderer } = require("obsidian");

// Get a reference to the current file's link for the 'contains' check
const currentFileLink = dv.current().file.link;

// 1. Filter: Tagged #trigger AND AvailableLocations contains a link to THIS file
const pages = dv.pages()
    .where(p => 
        p.file.tags.includes("#trigger") && 
        p.AvailableLocations && 
        dv.array(p.AvailableLocations).includes(currentFileLink)
    );

const result = pages.map(p => {
    // We construct the Meta Bind syntax for a toggle
    // This targets the "triggered" field in the specific file path
     const metaBindToggle = `\`INPUT[toggle:${p.file.name}#triggered]\``;

    
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
- **Next Location:** [[Bathroom]],
- **Previous Location:** [Previous Area]
- **Connected Quests:** [Quest Name]

- **Premade NPCs** [[Premade NPCs]]

