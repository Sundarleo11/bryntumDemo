# Customizing keyboard shortcuts

Keyboard shortcuts are easily customized. Provide a `keyMap` config object with the key or key combination as key, and
the action (function name) as value. Key combinations are case-insensitive. 

Please note that Scheduler does not currently provide any default keyboard shortcuts. Only Scheduler's features does
provide keyboard shortcuts.

```javascript
const scheduler = new Scheduler({
    keyMap: {
        // Changing keyboard navigation to respond to WASD keys.
        w : 'navigateUp',
        a : 'navigateLeft',
        s : 'navigateDown',
        d : 'navigateRight',
        
        // Removes mappings for arrow keys.
        ArrowUp    : null,
        ArrowLeft  : null,
        ArrowDown  : null,
        ArrowRight : null
    }
});
```
Modifier keys are also supported:
```javascript
const scheduler = new Scheduler({
    keyMap: {
        'Shift+w' : 'selectUp',
        'Shift+a' : 'selectLeft',
        'Shift+s' : 'selectDown',
        'Shift+d' : 'selectRight'
    }
});
```
Scheduler features provides their own keyboard shortcuts. These will be applied to the Scheduler's keyMap with the
feature name prefixed to their action. A feature keyboard shortcut can be customized by the Scheduler's keyMap:
```javascript
const scheduler = new Scheduler({
    // Customize feature's keyMap in Scheduler's keyMap
    keyMap: {
        'Ctrl+Shift+C'   : 'eventCopyPaste.copy',
        'Ctrl+Shift+X'   : 'eventCopyPaste.cut',
        'Ctrl+C'         : null,
        'Ctrl+X'         : null
    }
});
```


<p class="last-modified">Last modified on 2023-05-26 8:20:28</p>