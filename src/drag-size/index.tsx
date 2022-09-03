import { addDragListener } from '@/utils/addDragListener'
import React, { useEffect, useRef } from 'react'
import { Dragger } from './index.style'

export interface DragSizeProps {
  type: 'horizontal' | 'vertical'
  onStart?(type: DragSizeProps['type']): void
  onEnd?(type: DragSizeProps['type']): void
  onMove?(pos: number, type: DragSizeProps['type']): void
}

export const DragSize: React.FC<DragSizeProps> = ({
  type,
  onMove,
  onEnd,
  onStart,
}) => {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    const target = ref.current
    if (target) {
      addDragListener({
        target,
        onDragMove(event) {
          onMove &&
            onMove(type === 'vertical' ? event.clientX : event.clientY, type)
        },
        onDragEnd(event) {
          onEnd && onEnd(type)
        },
        onDragStart(event) {
          onStart && onStart(type)
        },
      })
    }
  }, [])

  return <Dragger ref={ref} type={type} />
}
