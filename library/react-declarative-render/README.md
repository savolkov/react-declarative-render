# react-declarative-render

> A lightweight library for declarative render of React components.
>
> Declaratively render any component from any piece of code without having unnecessary dependencies and decrease spaghetti-styled code :)  

---

## Demo

There is [demo project sourcecode](https://github.com/savolkov/react-declarative-render/tree/main/demo/react-declarative-render-demo).

Live demo and playground are not ready yet.

## Current state

Library is not production-ready. Our development plan is described in [GitHub Project](https://github.com/users/savolkov/projects/1) and [GitHub Issues](https://github.com/savolkov/react-declarative-render/issues/)

## Installation

Use your favorite package manager:

### pnpm

```bash
pnpm i react-declarative-render
```

### yarn

```bash
yarn i react-declarative-render
```

### npm

```bash
npm i react-declarative-render
```

## Usage

You can refer to the [demo project](https://github.com/savolkov/react-declarative-render/tree/main/demo/react-declarative-render-demo) to play with the library.

### 1. Preparating infrastructure

1. Declare a list of slots as an enum.
```tsx
export enum SlotsEnum {
  LOGO = 'LOGO',
  CLICKER = 'CLICKER',
  DOCS = 'DOCS'
}
```
2. Declare props types accepted by slots.
```tsx
export type SlotsPropsTypes = {
  [SlotsEnum.CLICKER]: Record<string, unknown>
  [SlotsEnum.LOGO]: Record<string, unknown>
  [SlotsEnum.DOCS]: Record<string, unknown>
}
```

3. Init `UISystemService`

```tsx
import { UISystemService } from 'react-declarative-render'
import { type SlotsPropsTypes } from './components/SlotsPropsTypes'

const uiSystemService = new UISystemService<SlotsPropsTypes>({ rootElementName: 'react-declarative-render-root' })
```

### 2. Place UISlots

At the places of desired render, place `UISlot` components with specified IDs.

```tsx
<UISystemSlot id={SlotsEnum.LOGO} uiSystemService={uiSystem} />
```

### 3. Render components

```tsx
    uiSystem.registerComponent({
      id: SlotsEnum.LOGO,
      component: <Logo />
    })
```

## Contributing

Pull requests are pretty much welcome.

## License

[MIT](https://github.com/savolkov/react-declarative-render/blob/main/license)
