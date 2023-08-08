import './App.css'
import React, { useCallback } from 'react'
import { type UISystemService, UISystemSlot } from 'react-declarative-render'
import { SlotsEnum } from './components/SlotsEnum'
import { Clicker } from './components/Clicker'
import { Logo } from './components/Logo'
import { ReadTheDocs } from './components/ReadTheDocs'
import { type SlotsPropsTypes } from './components/SlotsPropsTypes'

interface Props {
  uiSystem: UISystemService<SlotsPropsTypes>
}
export const App = ({ uiSystem }: Props): JSX.Element => {
  const mountAll = useCallback(() => {
    uiSystem.registerComponent({
      id: SlotsEnum.LOGO,
      component: <Logo />
    })

    uiSystem.registerComponent({
      id: SlotsEnum.CLICKER,
      component: <Clicker />
    })

    uiSystem.registerComponent({
      id: SlotsEnum.DOCS,
      component: <ReadTheDocs />
    })
  }, [uiSystem])

  return (
        <>
            <button onClick={mountAll}>Mount Stuff!</button>
            <div id="test-root"></div>
            <div id="tmp"></div>
            <div className="App">
                <UISystemSlot id={SlotsEnum.LOGO} uiSystemService={uiSystem} />
                <div id="logo"></div>
                <h1>Vite + React</h1>
                <div className="card">
                    <UISystemSlot id={SlotsEnum.CLICKER} uiSystemService={uiSystem} />
                </div>
                <UISystemSlot id={SlotsEnum.DOCS} uiSystemService={uiSystem} />
            </div>
        </>
  )
}
