import { type Emitter } from 'mitt'
import { type UISystemMessagesType } from '../types/UISystemMessagesType'
import { type IPropsQueue } from '../types/IPropsQueue'
import { type TComponentsPropsConstraint } from '../types/TComponentsPropsConstraint'

export interface IUISystemContext<TComponentsProps extends TComponentsPropsConstraint> {
  emitter: Emitter<UISystemMessagesType<TComponentsProps>>
  propsQueue: IPropsQueue<TComponentsProps>
}
