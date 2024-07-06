	export type KeyCodeData = {
		keycode: number
		name: string[]
	}

	export interface MacKeyBoardProps {
		prefixCls?: string
		className?: string
		style?: string
		keyCode?: number[]
		onMouseDown?: (e: MouseEvent, item: KeyCodeData) => void
		onMouseUp?: (e: MouseEvent, item: KeyCodeData) => void
	}

