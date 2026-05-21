## Overview
> *This would be a quick description of what this location is all about. What is the hook that attracts the party to it? What is the general idea that you want to accomplish?.*

**name**:: The Town
**partOfLocation**:: [location name]
**tags**:: #location 
**mapLink:: [[]]

---

## Points of Interest

```dataview
TABLE

FROM #location
WHERE partOfLocation = this.file.link
```

---

## NPCs

> [!NPCs]+ NPCS
>
> ```dataview
> TABLE WITHOUT ID
> name as "Name",
> race as "Race",
> role as "Role",
> class as "Class"
> 
> FROM #npc
> WHERE residence = this.file.link
> ```

---

## Encounters & Events

### Encounters:
- **Frozen NPCs**: A man with no face sweeps the same patch of street endlessly. When spoken to, he stops for 3 seconds and says, _“She isn’t waking up...”_ before resetting.
- **Flickering Child**: A little girl appears behind the players and asks, _“Do you know where the roses are?”_ before vanishing.
- **The Hollow House**: A perfect home outside, but inside is a single room that stretches into black void. A floating picture frame shows a rose and a green dress.
- **Repeating Alley**: A short alley that loops—no matter which way

---

## Links
- **Dashboard:** [[Campaign Dashboard]]
- **Next Location:** [Next Area]
- **Connected Quests:** [Quest Name]
