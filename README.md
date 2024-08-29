# utils

[![JSR](https://jsr.io/badges/@yttiiz/utils)](https://jsr.io/@yttiiz/utils)

This is an **utility** toolkit that provides out of the box **classes**, to handle common software development tasks.

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
import { DateFormatter } from "@yttiiz/utils";
```

## Example

```ts
DateFormatter.display({ date: 1724620845901 }); // 25 août 2024 à 23:20
```
