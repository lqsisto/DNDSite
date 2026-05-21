**isKeyLocation**:: [TRUE/FALSE]
**name**:: <% tp.file.title %>
**partOfLocation**:: 

---  
##### **Sensory Snapshot:** (One smell, one sound, one visual).
- Tuoksuu kirjat ja kuivatut yrtit. Vaikka huoneessa on paljon ikkunoita, siellä on raskas tunnelma johtuen suuresta määrästä erilaisia kirjoja ja tutkimuksia
- Kaikki jotka ymmärtää taikuudesta mitään on leuka lattiassa, koska tämä on täydellinen työhuone 

##### **The Vibe:** (Cozy, Tense, Busy, Eerie).
- Kotoisa, työhuone


 ##### **Interaction/Activity:** (Something for them to _do_ other than talk. e.g., "A game of cards," "A jammed door," "A leaking pipe.")
+ Tässä paikassa kaikki taikuuteen liittyvät tutkimukset 2x nopeudella 

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

- **Premade NPCs** [[Premade NPCs]]
