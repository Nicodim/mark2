import React, { useState } from 'react'
import { SidebarBox, Switchers } from './styles'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const onToggle = () => {
    setIsCollapsed(prev => !prev)
  }
  return (
        <SidebarBox data-testid='sidebar' collapsed={isCollapsed || undefined}>
            <button data-testid="sidebar-toggle" onClick={onToggle}></button>
            <Switchers>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </Switchers>
        </SidebarBox>
  )
}

export default Sidebar
