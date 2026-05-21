**isKeyLocation**:: false
**name**:: <% tp.file.title %>
**partOfLocation**:: [[Everhut]]
 
_Use this for any basic location

- **Sensory Snapshot:** (One smell, one sound, one visual).
	- Tuntuu kuin olisi metsässä. Kukat tuoksuu voimakkaasti ja sekoittuu lahoamiseen. Suuret tulikärpäset pörrää ympäriinsä.
	- Ympärillä näkyy paljon erivärisiä kasveja, joista osa on tuttuja ja osa täysin vieraita. Keskellä pihaa kasvaa suuri puu. 

- **The Vibe:** (Cozy, Tense, Busy, Eerie).
	- Mystinen, vieras, turvallinen

- **Interaction/Activity:** (Something for them to _do_ other than talk. e.g., "A game of cards," "A jammed door," "A leaking pipe.")
	- Hahmot voi poimia täältä halutessaan kasveja [[Random plants table]]



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
