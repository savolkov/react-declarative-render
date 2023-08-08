import React from 'react'
import mitt, { type Emitter } from 'mitt'
import {
  type RegisterComponentPayloadType,
  type RegisterDOMElementPayloadType,
  type UISystemMessagesType,
  type UnRegisterDOMElementPayloadType
} from '../types/UISystemMessagesType'
import { UISystemMessagesEnum } from '../types/UISystemMessagesEnum'
import ReactDOM from 'react-dom/client'
import { type IMountParams } from '../types/IMountParams'
import { UISystemRoot } from '../components/UISystemRoot'
import { type IPropsQueue } from '../types/IPropsQueue'
import { PropsQueue } from './PropsQueue'
import { type TComponentsPropsConstraint } from '../types/TComponentsPropsConstraint'

export class UISystemService<TComponentsProps extends TComponentsPropsConstraint> {
  private readonly emitter: Emitter<UISystemMessagesType<TComponentsProps>>

  private readonly propsQueue: IPropsQueue<TComponentsProps>

  private mountUISystem (params?: IMountParams): void {
    const root = document.createElement('div')
    root.id = params?.rootElementName ?? 'react-declarative-render-root'
    document.body.append(root)

    const reactRoot = ReactDOM.createRoot(root)
    reactRoot.render(<UISystemRoot emitter={this.emitter} propsQueue={this.propsQueue} />)
    // ReactDOM
    //   .createRoot(root)
    //   .render(
    //       <UISystemRoot emitter={this.emitter} propsQueue={this.propsQueue} />
    //   )
  }

  constructor (params?: IMountParams) {
    console.log('comstruct')
    this.emitter = mitt<UISystemMessagesType<TComponentsProps>>()
    this.propsQueue = new PropsQueue<TComponentsProps>()
    this.mountUISystem(params)
  }

  public registerDomElement (payload: RegisterDOMElementPayloadType<TComponentsProps>): void {
    this.emitter.emit(UISystemMessagesEnum.registerDOMElement, payload)
  }

  public unRegisterDomElement (payload: UnRegisterDOMElementPayloadType<TComponentsProps>): void {
    this.emitter.emit(UISystemMessagesEnum.unRegisterDOMElement, payload)
  }

  public registerComponent (payload: RegisterComponentPayloadType<TComponentsProps>): void {
    this.emitter.emit(UISystemMessagesEnum.registerComponent, payload)
  }

  public unRegisterComponent (payload: RegisterDOMElementPayloadType<TComponentsProps>): void {
    this.emitter.emit(UISystemMessagesEnum.unRegisterComponent, payload)
  }
}
