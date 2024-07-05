<h1 align="center">Svelte Mac Keyboard</h1>
<p align="center">
  <a href="https://gitub.com/markjaquith/svelte-mac-keyboard">
    <img alt="svelte-mac-keyboard" src="https://user-images.githubusercontent.com/1680273/80699566-c2aad500-8b0e-11ea-8d37-7e5537949d73.png">
  </a>
</p>

MacBook-style computer keyboard as a Svelte component. Adapted from [react-mac-keyboard](https://uiwjs.github.io/react-mac-keyboard/)

## Quick Start

```svelte
<script>
  import MacKeyboard from "@markjaquith/svelte-mac-keyboard"
  let keyCode = []
</script>

<MacKeyboard
  {keyCode}
  onMouseDown={(e, item) => {
    if (item.keycode > -1) {
      keyCode = [item.keycode]
    }
  }}
  onMouseUp={() => keyCode = []}
/>
```

## Options Props

```typescript
type KeyCodeData = {
  keycode: number;
  name: string[];
}

interface MacKeyBoardProps {
  prefixCls?: string;
  className?: string;
  keyCode?: number[];
  onMouseDown?: (e: MouseEvent, item: KeyCodeData) => void;
  onMouseUp?: (e: MouseEvent, item: KeyCodeData) => void;
}
```

## Development

Runs the project in development mode.  

```bash
npm run install
npm run build

npm run start
```

Builds the app for production to the build folder.

```bash
npm run build
npm run doc
```

## Contributors

Thanks to jaywcjlove 小弟调调 and contributors to the React version!

## License

Licensed under the MIT License.
