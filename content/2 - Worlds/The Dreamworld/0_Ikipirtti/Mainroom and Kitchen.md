**isKeyLocation**:: false
**name**:: <% tp.file.title %>
**partOfLocation**:: [[Everhut]]
 

### Sandaara tunnistaa monen monta portaalia (reiät ylempiin/alempiin kerroksiin, portaali Millwateriin)

- **Sensory Snapshot:** (One smell, one sound, one visual).
	- Huoneessa tuoksuu sulanut vaha ja vastavalmistunut ruoka. Tuli rätisee takassa. Suuret ikkunat valaisevat keittiön.
	- - **Huoneen toisella reunalla suuri ikkuna joka valaisee**
	- **Keittiössä pöydällä kokonainen paistettu kana, hyllyillä tuoreita hedelmiä, leipää, olutta ja viiniä**

- **The Vibe:** (Cozy, Tense, Busy, Eerie).
	- Erittäin kotoisa ja turvallinen

- **The "Information Gravity":** (What clue lives here? Remember: if they miss this place, move the clue somewhere else!)
	- Inviterin kirje pöydällä (löydetty)



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
- **Next Location:** [Next Area]
- **Previous Location:** [Previous Area]
- **Connected Quests:** [Quest Name]

- **Premade NPCs** [[Premade NPCs]]
