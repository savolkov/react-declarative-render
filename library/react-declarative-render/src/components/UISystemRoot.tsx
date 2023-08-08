import React, { createContext, useEffect, useState } from 'react'
import { type Emitter } from 'mitt'
import { type UISystemMessagesType } from '../types/UISystemMessagesType'
import { UISystemMessagesEnum } from '../types/UISystemMessagesEnum'
import { UISystemRenderer } from './UISystemRenderer'
import { type IUISystemContext } from './IUISystemContext'
import { type IPropsQueue } from '../types/IPropsQueue'
import { type TComponentsPropsConstraint } from '../types/TComponentsPropsConstraint'

interface UISystemRootProps<TComponentsProps extends TComponentsPropsConstraint> {
  emitter: Emitter<UISystemMessagesType<TComponentsProps>>
  propsQueue: IPropsQueue<TComponentsProps>
}

export const UISystemRoot = <TComponentProps extends TComponentsPropsConstraint,>({ emitter, propsQueue }: UISystemRootProps<TComponentProps>): JSX.Element => {
  console.log('uisystemroot TEST')
  const [slots, setSlots] = useState<Record<string, HTMLElement>>({})
  console.log('2uisystemroot')

  // Not memorizing because renders only once
  const UISystemContext = createContext<IUISystemContext<TComponentProps>>({ emitter, propsQueue })

  useEffect(() => {
    emitter.on(UISystemMessagesEnum.registerDOMElement, (payload) => {
      setSlots((slots) => {
        const newSlots = { ...slots }
        // TODO: Improve typing
        // @ts-expect-error key is not a string
        newSlots[payload.id] = payload.element
        return newSlots
      })
    })

    emitter.on(UISystemMessagesEnum.unRegisterDOMElement, (payload) => {
      setSlots((slots) => {
        const newSlots = { ...slots }
        // TODO: Improve typing
        // @ts-expect-error key is not a string
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete newSlots[payload.id]
        return newSlots
      })
    })

    return () => {
      emitter.off(UISystemMessagesEnum.registerDOMElement)
      emitter.off(UISystemMessagesEnum.unRegisterDOMElement)
    }
  }, [])

  return <UISystemContext.Provider value={{ emitter, propsQueue }}>
        <UISystemRenderer emitter={emitter} slots={slots}/>
    </UISystemContext.Provider>
}
