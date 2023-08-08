import { type UISystemMessagesEnum } from './UISystemMessagesEnum'
import { type TComponentsPropsConstraint } from './TComponentsPropsConstraint'

export interface RegisterDOMElementPayloadType<TComponentProps> {
  id: keyof TComponentProps
  element: HTMLElement
}

export interface UnRegisterDOMElementPayloadType<TComponentProps> {
  id: keyof TComponentProps
}

export interface RegisterComponentPayloadType<TComponentProps> {
  id: keyof TComponentProps
  component: JSX.Element
}

export interface UnRegisterComponentPayloadType<TComponentProps> {
  id: keyof TComponentProps
}

export type UISystemMessagesType<TComponentProps extends TComponentsPropsConstraint> = {
  [UISystemMessagesEnum.registerDOMElement]: RegisterDOMElementPayloadType<TComponentProps>
  [UISystemMessagesEnum.unRegisterDOMElement]: UnRegisterDOMElementPayloadType<TComponentProps>
  [UISystemMessagesEnum.registerComponent]: RegisterComponentPayloadType<TComponentProps>
  [UISystemMessagesEnum.unRegisterComponent]: UnRegisterComponentPayloadType<TComponentProps>
}
