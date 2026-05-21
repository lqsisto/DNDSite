
```dataview
list

FROM #SessionNotes
sort file.mtime ASC
```



```meta-bind-button
label: Create new note
style: primary
hidden: false
actions:
  - type: templaterCreateNote
    templateFile: z_configs/templater/📜 Session Notes Template.md
    folderPath: 2 - Worlds/The Dreamworld/___Session Notes
    fileName: ""
    openNote: true
    openIfAlreadyExists: false

```

