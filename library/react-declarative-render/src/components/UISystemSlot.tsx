import React, { useEffect, useRef } from 'react'
import { type UISystemService } from '../services/UISystemService'
import { type TComponentsPropsConstraint } from '../types/TComponentsPropsConstraint'

interface Props<TComponentsProps extends TComponentsPropsConstraint> {
  id: keyof TComponentsProps
  uiSystemService: UISystemService<any>
}
export const UISystemSlot = <TComponentsProps extends TComponentsPropsConstraint,>({ id, uiSystemService }: Props<TComponentsProps>): JSX.Element => {
  console.log('uisystemslot')
  const ref = useRef(null)
  useEffect(() => {
    uiSystemService.registerDomElement({
      id,
      // At the moment of `useEffect` we have current available
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      element: ref.current!
    })
    return () => {
      uiSystemService.unRegisterDomElement({
        id
      })
    }
  })

  return <div ref={ref}></div>
}
