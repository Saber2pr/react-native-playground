export interface AddDragListenerOps {
  target: HTMLElement
  onDragMove: (event: MouseEvent) => void
  onDragStart?: (event: MouseEvent) => void
  onDragEnd?: (event: MouseEvent) => void
}

export const addDragListener = ({
  target,
  onDragMove,
  onDragEnd,
  onDragStart,
}: AddDragListenerOps) => {
  let lock = false
  const cancel = (event: MouseEvent) => {
    lock = false
    onDragEnd && onDragEnd(event)
    document.onmousemove = null
    document.onmouseup = null
  }
  target.onmousedown = (event) => {
    lock = true
    onDragStart && onDragStart(event)
    document.onmousemove = (event) => lock && onDragMove(event)
    document.onmouseup = cancel
  }
  target.onmouseup = cancel
}
