# utils

This is a specific **utility** toolkit created for my differents project. It's allow specific **classes**, out of the box, and **services** to handle basic tasks.

## Installation

Run this command :

```
pnpm i @yttiiz/utils
```

## Example

import package elements, like so :

```javascript
import * as utils from "@yttiiz/utils";
```

or individualy (e.g) :

```ts
import { DateHandler } from "@yttiiz/utils";
 
DateHandler.displayDate({ date: 1724620845901 }); // 25 août 2024 à 23:20