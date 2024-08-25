# utils

This is a **utility** toolkit created for my differents projects. It's allow specific **classes**, out of the box, and **services** to handle basic tasks.

## Installation

Run this command :

```
pnpm i @yttiiz/utils
```

## Import

import package elements, like so :

```ts
import * as utils from "@yttiiz/utils";
```

or individualy (e.g) :

```ts
import { DateHandler } from "@yttiiz/utils";
```

## Example
```ts
DateHandler.displayDate({ date: 1724620845901 }); // 25 août 2024 à 23:20
```