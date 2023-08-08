import { type ValueOf } from '../utils/TValueOf'
import { type TComponentsPropsConstraint } from './TComponentsPropsConstraint'

export interface IPropsQueue<TComponentsProps extends TComponentsPropsConstraint> {
  destroy: () => void
  enqueue: (receiverId: keyof TComponentsProps, value: ValueOf<TComponentsProps>) => void
}
