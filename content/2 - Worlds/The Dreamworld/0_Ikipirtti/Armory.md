
**isKeyLocation**:: false
**name**:: <% tp.file.title %>
**partOfLocation**:: [[Everhut]]
 

 ##### **Sensory Snapshot:** (One smell, one sound, one visual).
- Kaikkialla on metallia, haarniskoita ja aseita. Tuoksuu tuhka ja palanut metalli. Tuli humisee kuin sinne olisi juuri puhallettu ilmaa.

##### **The Vibe:** (Cozy, Tense, Busy, Eerie).
- Tulee olo kuin olisi sotilastukikohdassa tai valmistautumassa suureen vaaraan. Aseiden ja haarniskoiden läsnäolo muistuttaa vaarasta

##### **Interaction/Activity:** 
- Pelaajat voi valita mitä tahansa aseita/armoreita jotka on valittavissa hahmoa luodessa. 


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
- **Previous Location:** [[Mainroom and Kitchen]]

- **Premade NPCs** [[Premade NPCs]]
