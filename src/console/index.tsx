import React, { useEffect, useRef } from 'react'
import { Container } from './index.style'

export interface ConsolePanelProps {}

export const ConsolePanel: React.FC<ConsolePanelProps> = ({}) => {
  const console_ref = useRef<HTMLDivElement>()

  let consoleContent = ''

  const renderConsole = () => {
    console_ref.current.innerHTML = consoleContent
    console_ref.current.scrollTo({
      top: console_ref.current.scrollHeight,
      behavior: 'smooth',
    })
  }

  const pushConsole = (data: { method: string; value: string }) => {
    if (data.method === '__MESSAGE_CONSOLE__') {
      consoleContent += `<pre>${data.value}</pre>`
      renderConsole()
    }
    if (data.method === '__MESSAGE_CONSOLE_ERROR__') {
      consoleContent += `<pre style="color: red;">${data.value}</pre>`
      renderConsole()
    }
  }

  useEffect(() => {
    const handle = (event) => pushConsole(event.data)
    window.addEventListener('message', handle)
    return () => window.removeEventListener('message', handle)
  }, [])

  return <Container ref={console_ref}></Container>
}
