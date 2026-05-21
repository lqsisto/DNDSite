---
tags: npc
race:
gender:
age:
occupation:
location:
---

# <% tp.file.title %>

> [!abstract]+ Vibe & Appearance
> **Hair:** | **Eyes:** 
> **Build:** | **Face:**
 > **Distinction:** <% tp.file.cursor() %> (e.g. Rugged pink skin. Smells like rain.)

> [!warning] Key Quirk / Limitation
> **IDENTIFIER:** (e.g. MUTE: She carries a sign she writes on.)

---

### 🎭 Personality & Traits
* **Fairness:** * **Secrets:** * **Habits:** ### 👣 Clues to Drop
> [!info]- Available Clues
> ```dataview
> TABLE WITHOUT ID
>   meta-bind-checkbox(ev-visual) as "Vis?",
>   Visual as "Evidence",
>   meta-bind-checkbox(ev-verbal) as "Verb?",
>   Verbal as "Rumor"
> FROM #clue
> WHERE contains(Available_locations, this.file.link)
> ```

---

### 📝 Notes & Spoilers
%% This area is hidden in Preview mode. Use it for plot twists! %%