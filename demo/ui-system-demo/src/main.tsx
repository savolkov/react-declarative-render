import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { UISystemService } from 'ui-system'
import { type SlotsPropsTypes } from './components/SlotsPropsTypes'

const uiSystemService = new UISystemService<SlotsPropsTypes>({ rootElementName: 'ui-system-root' })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App uiSystem={uiSystemService}/>
  </React.StrictMode>
)
