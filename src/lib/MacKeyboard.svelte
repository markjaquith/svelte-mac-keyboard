<script lang="ts">
	import type { KeyCodeData } from '$lib/types'

	export let className: string = ''
	export let style: string = ''
	export let keyCode: number[] = []
	export let onMouseDown: ((e: MouseEvent, item: KeyCodeData) => void) | undefined = undefined
	export let onMouseUp: ((e: MouseEvent, item: KeyCodeData) => void) | undefined = undefined

	const keyCodeData: KeyCodeData[] = [
		{ keycode: 27, name: ['esc'] },
		{ keycode: 112, name: ['F1'] },
		{ keycode: 113, name: ['F2'] },
		{ keycode: 114, name: ['F3'] },
		{ keycode: 115, name: ['F4'] },
		{ keycode: 116, name: ['F5'] },
		{ keycode: 117, name: ['F6'] },
		{ keycode: 118, name: ['F7'] },
		{ keycode: 119, name: ['F8'] },
		{ keycode: 120, name: ['F9'] },
		{ keycode: 121, name: ['F10'] },
		{ keycode: 122, name: ['F11'] },
		{ keycode: 123, name: ['F12'] },
		{ keycode: -1, name: ['〇'] },
		{ keycode: 192, name: ['~', '`'] },
		{ keycode: 49, name: ['!', '1'] },
		{ keycode: 50, name: ['@', '2'] },
		{ keycode: 51, name: ['#', '3'] },
		{ keycode: 52, name: ['$', '4'] },
		{ keycode: 53, name: ['%', '5'] },
		{ keycode: 54, name: ['^', '6'] },
		{ keycode: 55, name: ['&', '7'] },
		{ keycode: 56, name: ['*', '8'] },
		{ keycode: 57, name: ['(', '9'] },
		{ keycode: 48, name: [')', '0'] },
		{ keycode: 189, name: ['＿', '-'] },
		{ keycode: 187, name: ['＋', ': '] },
		{ keycode: 8, name: ['delete'] },
		{ keycode: 9, name: ['tab'] },
		{ keycode: 81, name: ['Q'] },
		{ keycode: 87, name: ['W'] },
		{ keycode: 69, name: ['E'] },
		{ keycode: 82, name: ['R'] },
		{ keycode: 84, name: ['T'] },
		{ keycode: 89, name: ['Y'] },
		{ keycode: 85, name: ['U'] },
		{ keycode: 73, name: ['I'] },
		{ keycode: 79, name: ['O'] },
		{ keycode: 80, name: ['P'] },
		{ keycode: 219, name: ['{', '['] },
		{ keycode: 221, name: ['}', ']'] },
		{ keycode: 220, name: ['|', '\\'] },
		{ keycode: 20, name: ['', 'CapsLock'] },
		{ keycode: 65, name: ['A'] },
		{ keycode: 83, name: ['S'] },
		{ keycode: 68, name: ['D'] },
		{ keycode: 70, name: ['F'] },
		{ keycode: 71, name: ['G'] },
		{ keycode: 72, name: ['H'] },
		{ keycode: 74, name: ['J'] },
		{ keycode: 75, name: ['K'] },
		{ keycode: 76, name: ['L'] },
		{ keycode: 186, name: [':', ';'] },
		{ keycode: 222, name: ['"', "'"] },
		{ keycode: 13, name: ['enter', 'return'] },
		{ keycode: 16, name: ['⇧'] },
		{ keycode: 90, name: ['Z'] },
		{ keycode: 88, name: ['X'] },
		{ keycode: 67, name: ['C'] },
		{ keycode: 86, name: ['V'] },
		{ keycode: 66, name: ['B'] },
		{ keycode: 78, name: ['N'] },
		{ keycode: 77, name: ['M'] },
		{ keycode: 188, name: ['<', ','] },
		{ keycode: 190, name: ['>', '.'] },
		{ keycode: 191, name: ['?', '/'] },
		{ keycode: 16, name: ['⇧'] },
		{ keycode: -1, name: ['fn'] },
		{ keycode: 17, name: ['control'] },
		{ keycode: 18, name: ['alt', 'option'] },
		{ keycode: 91, name: ['command'] },
		{ keycode: 32, name: [''] },
		{ keycode: 91, name: ['command'] },
		{ keycode: 18, name: ['alt', 'option'] },
		{ keycode: 37, name: ['◀'] },
		{ keycode: 38, name: ['▲'] },
		{ keycode: 39, name: ['▶'] },
		{ keycode: 40, name: ['▼'] },
	]
</script>

<div class="{className} keyboard" {style}>
	<div class="keyboard__wrap">
		{#each keyCodeData as item}
			<button
				on:mousedown={(e) => onMouseDown && onMouseDown(e, item)}
				on:mouseup={(e) => onMouseUp && onMouseUp(e, item)}
				class={keyCode.includes(item.keycode) ? 'pressed' : ''}
				data-key={item.keycode}
			>
				{#each item.name as name}
					<span>{name}</span>
				{/each}
			</button>
		{/each}
	</div>
</div>

<style>
	.keyboard {
		font-family: sans-serif;
		height: 394px;
		border-radius: 10px;
		border: 1px solid #c9c9c9;
		background: #f2f2f2;
		box-shadow:
			2px 0px 2px #e2e2e2 inset,
			-2px 2px 3px #e2e2e2 inset,
			1px 0px 0px #c1c1c1 inset,
			0px -2px 3px #c1c1c1 inset;
		user-select: none;
		position: relative;
		width: 995px;
		margin: 0 auto;
	}

	.keyboard__wrap {
		width: 992px;
		margin-top: 9px;
		padding-left: 11px;
		position: relative;
		float: left;
	}

	.keyboard button {
		appearance: none;
		background: none;
		border: none;
		box-shadow: none;
		padding: 0;
		margin: 0;
		font-family: inherit;
		font-size: inherit;
		color: inherit;
		text-align: inherit;
		line-height: inherit;
		cursor: pointer;
		outline: none;
	}

	.keyboard button {
		width: 62px;
		height: 62px;
		float: left;
		list-style: none;
		margin-right: 5px;
		margin-bottom: 5px;
		background: #151515;
		color: #c8c8c8;
		text-align: center;
		line-height: 62px;
		font-size: 12px;
		border-radius: 8px;
		border: 1px solid #3a3a3a;
		box-shadow:
			1px 0px 0px #000000,
			0px 1px 0px #000000,
			-1px 0px 0px #000000,
			0px -1px 0px #000000;
		box-sizing: initial;
		transition: all 0.4s ease-in;
		user-select: none;
		cursor: pointer;
		position: relative;
	}

	.keyboard button:active,
	.keyboard button.pressed {
		color: #52f800;
		background-color: #100068;
		border: 1px solid #332376;
		transition: 1ms linear;
	}

	.keyboard button:nth-child(1) {
		width: 99px;
		height: 28px;
		line-height: 28px;
		text-indent: 1em;
		text-align: left;
	}

	.keyboard button:nth-child(2),
	.keyboard button:nth-child(3),
	.keyboard button:nth-child(4),
	.keyboard button:nth-child(5),
	.keyboard button:nth-child(6),
	.keyboard button:nth-child(7),
	.keyboard button:nth-child(8),
	.keyboard button:nth-child(9),
	.keyboard button:nth-child(10),
	.keyboard button:nth-child(11),
	.keyboard button:nth-child(12),
	.keyboard button:nth-child(13),
	.keyboard button:nth-child(14) {
		width: 60px;
		height: 28px;
		line-height: 28px;
	}

	.keyboard button:nth-child(15),
	.keyboard button:nth-child(16),
	.keyboard button:nth-child(17),
	.keyboard button:nth-child(18),
	.keyboard button:nth-child(19),
	.keyboard button:nth-child(20),
	.keyboard button:nth-child(21),
	.keyboard button:nth-child(22),
	.keyboard button:nth-child(23),
	.keyboard button:nth-child(24),
	.keyboard button:nth-child(25),
	.keyboard button:nth-child(26),
	.keyboard button:nth-child(27),
	.keyboard button:nth-child(40),
	.keyboard button:nth-child(41),
	.keyboard button:nth-child(42),
	.keyboard button:nth-child(53),
	.keyboard button:nth-child(54),
	.keyboard button:nth-child(64),
	.keyboard button:nth-child(65),
	.keyboard button:nth-child(66) {
		padding: 7px 0;
		height: 48px;
	}

	.keyboard button:nth-child(15) span,
	.keyboard button:nth-child(16) span,
	.keyboard button:nth-child(17) span,
	.keyboard button:nth-child(18) span,
	.keyboard button:nth-child(19) span,
	.keyboard button:nth-child(20) span,
	.keyboard button:nth-child(21) span,
	.keyboard button:nth-child(22) span,
	.keyboard button:nth-child(23) span,
	.keyboard button:nth-child(24) span,
	.keyboard button:nth-child(25) span,
	.keyboard button:nth-child(26) span,
	.keyboard button:nth-child(27) span,
	.keyboard button:nth-child(40) span,
	.keyboard button:nth-child(41) span,
	.keyboard button:nth-child(42) span,
	.keyboard button:nth-child(53) span,
	.keyboard button:nth-child(54) span,
	.keyboard button:nth-child(64) span,
	.keyboard button:nth-child(65) span,
	.keyboard button:nth-child(66) span {
		line-height: 23px;
		height: 23px;
		width: 100%;
		float: left;
		font-size: 14px;
	}

	.keyboard button:nth-child(28) span,
	.keyboard button:nth-child(55) span,
	.keyboard button:nth-child(67) span {
		line-height: 14px;
		margin-top: 43px;
		float: right;
		margin-right: 8px;
	}

	.keyboard button:nth-child(30),
	.keyboard button:nth-child(31),
	.keyboard button:nth-child(32),
	.keyboard button:nth-child(33),
	.keyboard button:nth-child(34),
	.keyboard button:nth-child(35),
	.keyboard button:nth-child(36),
	.keyboard button:nth-child(37),
	.keyboard button:nth-child(38),
	.keyboard button:nth-child(39),
	.keyboard button:nth-child(44),
	.keyboard button:nth-child(45),
	.keyboard button:nth-child(46),
	.keyboard button:nth-child(47),
	.keyboard button:nth-child(48),
	.keyboard button:nth-child(49),
	.keyboard button:nth-child(50),
	.keyboard button:nth-child(51),
	.keyboard button:nth-child(52),
	.keyboard button:nth-child(57),
	.keyboard button:nth-child(58),
	.keyboard button:nth-child(59),
	.keyboard button:nth-child(60),
	.keyboard button:nth-child(61),
	.keyboard button:nth-child(62),
	.keyboard button:nth-child(63) {
		font-size: 18px;
		line-height: 64px;
	}

	.keyboard button:nth-child(29) span,
	.keyboard button:nth-child(43) span,
	.keyboard button:nth-child(56) span,
	.keyboard button:nth-child(68) span,
	.keyboard button:nth-child(69) span,
	.keyboard button:nth-child(70) span,
	.keyboard button:nth-child(71) span,
	.keyboard button:nth-child(73) span,
	.keyboard button:nth-child(74) span {
		line-height: 14px;
		margin-top: 43px;
		text-indent: 5px;
		float: left;
	}

	.keyboard button:nth-child(28),
	.keyboard button:nth-child(29) {
		width: 73px;
	}

	.keyboard button:nth-child(43),
	.keyboard button:nth-child(55) {
		width: 102px;
	}

	.keyboard button:nth-child(43):active span:first-child {
		background: #52f800;
	}

	.keyboard button:nth-child(43) span:first-child {
		position: absolute;
		top: -36px;
		left: 5px;
		width: 6px;
		height: 6px;
		background: #fff;
		border-radius: 3px;
	}

	.keyboard button:nth-child(55) span:first-child,
	.keyboard button:nth-child(70) span:first-child {
		position: absolute;
		right: 0px;
		top: -37px;
		font-size: 12px;
		line-height: 12px;
	}

	.keyboard button:nth-child(70) span:first-child {
		left: 0px;
		text-align: left;
	}

	.keyboard button:nth-child(74) span:first-child {
		position: absolute;
		left: 0;
		top: -37px;
		font-size: 12px;
		line-height: 12px;
	}

	.keyboard button:nth-child(56) {
		width: 136px;
	}

	.keyboard button:nth-child(67) {
		width: 137px;
	}

	.keyboard button:nth-child(71),
	.keyboard button:nth-child(73) {
		width: 70px;
	}

	.keyboard button:nth-child(72) {
		width: 333px;
	}

	.keyboard button:nth-child(76),
	.keyboard button:nth-child(78) {
		height: 29px;
		line-height: 29px;
	}

	.keyboard button:nth-child(76) {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.keyboard button:nth-child(78) {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		position: absolute;
		bottom: 0;
		right: 84px;
	}
</style>
