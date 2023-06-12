# Customizing keyboard shortcuts

Keyboard shortcuts are easily customized. Provide a `keyMap` config object with the key or key combination as key, and
the action (function name) as value. Key combinations are case-insensitive.

```javascript
const grid = new Grid({
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
const grid = new Grid({
    keyMap: {
        'Ctrl+h'       : 'navigateFirstColumn',
        'Ctrl+e'       : 'navigateLastColumn',
        'Ctrl+Shift+h' : 'navigateFirstCell',
        'Ctrl+Shift+e' : 'navigateLastCell'
    }
});
```

Grid features provides their own keyboard shortcuts. These will be applied to the Grid's keyMap with the feature name
prefixed to their action. A feature keyboard shortcut can be customized by the Grid's keyMap:
```javascript
const grid = new Grid({
    // Customize feature's keyMap in Grid's keyMap
    keyMap: {
        'Ctrl+n' : 'search.gotoNextHit',
        'F3'     : null,
        'Ctrl+g' : null
    }
});
```
A keyboard combination can sometimes be used for multiple actions. For most of these cases only one of the action
handlers will recognize the action as something it will apply its logic to. However, some actions do collide. And for
that there is a prioritization configuration built-in to the keyMap functionality.

```javascript
    // Default keyMap configuration for ContextMenuBase
    keyMap : {
       'Space' : { handler : 'showContextMenuByKey', weight : 100 },
    }
```

These keyboard shortcuts will have a `weight` specified in the documentation. Please note that customizing these
keyboard shortcuts can have side-effects not intended and not easily recognizable.

For advanced users, the weight configuration can be a tool to configure more actions for the same keyboard combination.
The colliding actions will be put in an array sorted by the largest weight last. The actions will then be called from
beginning to end.

```javascript
const grid = new Grid({
    feature: {
        tree: {
            keyMap : {
                // Instead of using a string action, use an object with a handler and a weight property.
                ' ' : { handler: 'toggleCollapseByKey', weight: 1000}
                /* This will affect the Tree feature's Space keyboard shortcut to (probably) be called last of all
                 * actions on Space. 
                */
            }
        }
    }
});
```


<p class="last-modified">Last modified on 2023-05-26 8:20:28</p>