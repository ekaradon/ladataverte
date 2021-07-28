import { Pane, Heading } from 'evergreen-ui'
import { ReactNode } from 'react'

type HeaderProps = {
  title: string
  children: ReactNode
}

function Header({ title, children }: HeaderProps) {
  return (
    <Pane display='flex' padding={16} borderRadius={3} background='tint1'>
      <Pane flex={1}>
        <Heading size={600}>{title}</Heading>
      </Pane>
      <Pane>{children}</Pane>
    </Pane>
  )
}

export { Header }
