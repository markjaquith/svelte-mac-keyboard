<script lang="ts">
  import MacKeyboard from "$lib/MacKeyboard.svelte"
  let keyCode: number[] = []
</script>

<MacKeyboard
  {keyCode}
  onMouseDown={(_e, item) => {
    if (item.keycode > -1) {
      keyCode = [item.keycode]
    }
  }}
  onMouseUp={() => keyCode = []}
/>
