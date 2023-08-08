import React, { useEffect, useState } from 'react'
import { type Emitter } from 'mitt'
import { type UISystemMessagesType } from '../types/UISystemMessagesType'
import { UISystemMessagesEnum } from '../types/UISystemMessagesEnum'
import ReactDOM from 'react-dom'
import { type TComponentsPropsConstraint } from '../types/TComponentsPropsConstraint'

interface UISystemRendererProps<TComponentsProps extends TComponentsPropsConstraint> {
  emitter: Emitter<UISystemMessagesType<TComponentsProps>>
  slots: Record<string, HTMLElement>
}

export const UISystemRenderer = <TComponentProps extends TComponentsPropsConstraint>({ emitter, slots }: UISystemRendererProps<TComponentProps>): JSX.Element => {
  const [components, setComponents] = useState<Record<string, JSX.Element>>({})

  useEffect(() => {
    emitter.on(UISystemMessagesEnum.registerComponent, (payload) => {
      setComponents((components) => {
        const newComponents = { ...components }
        console.log(newComponents)
        // TODO: Improve typing
        // @ts-expect-error key is not a string
        newComponents[payload.id] = payload.component
        return newComponents
      })
    })

    emitter.on(UISystemMessagesEnum.unRegisterComponent, (payload) => {
      setComponents((components) => {
        const newComponents = { ...components }
        // TODO: Improve typing
        // @ts-expect-error key is not a string
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete newComponents[payload.id]
        return newComponents
      })
    })

    return () => {
      emitter.off(UISystemMessagesEnum.registerComponent)
      emitter.off(UISystemMessagesEnum.unRegisterComponent)
    }
  })

  return <>
        {
            Object.keys(components)
              .map(
                (id) => {
                  if (id !== undefined) {
                    return ReactDOM.createPortal(components[id], slots[id], id)
                  }
                  return null
                }
              )
        }
    </>
}
