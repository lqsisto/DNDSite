**isKeyLocation**:: false
**name**:: <% tp.file.title %>
**partOfLocation**:: [[Everhut]]



 - **Sensory Snapshot:** (One smell, one sound, one visual).
	 - Tuoksuu hennosti kukkasille, linnut laulaa, vesi solisee kuin purossa

- **The Vibe:** (Cozy, Tense, Busy, Eerie).
	- Kirkas, keväinen

- **Interaction/Activity:** 
	- Kun katsoo ulos ikkunasta, näkee lempimaisemansa koko maailmassa


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
- **Previous Location:** [[Bedroom]]

- **Premade NPCs** [[Premade NPCs]]

