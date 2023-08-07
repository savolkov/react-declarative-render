import { type IPropsQueue } from '../types/IPropsQueue'
import { type ValueOf } from '../utils/TValueOf'
import { type TComponentsPropsConstraint } from '../types/TComponentsPropsConstraint'

interface QueueElement<TComponentsProps extends TComponentsPropsConstraint> {
  receiverId: keyof TComponentsProps
  value: ValueOf<TComponentsProps>
  timestamp: number
}

type HandlersMap<TComponentProps extends TComponentsPropsConstraint, TId extends keyof TComponentProps> = Record<TId, (params: TComponentProps[TId]) => void>

const TTL = 30 // seconds

export class PropsQueue<TComponentsProps extends TComponentsPropsConstraint> implements IPropsQueue<TComponentsProps> {
  private queue: Array<QueueElement<TComponentsProps>>

  private readonly handlersMap: HandlersMap<TComponentsProps, keyof TComponentsProps>

  // private interval: ReturnType<typeof setInterval> | null

  private flush (): void {
    const date = new Date().getTime()
    this.queue = this.queue.filter(itm => (date - itm.timestamp) > (TTL * 1000))
  }

  constructor () {
    this.queue = []
    // TODO: Improve typing
    // @ts-expect-error key is not a string
    this.handlersMap = {}
    // this.interval = setInterval(this.flush, TTL)
  }

  public enqueue (receiverId: keyof TComponentsProps, value: ValueOf<TComponentsProps>): void {
    this.queue.push({ receiverId, value, timestamp: new Date().getTime() })
  }

  public destroy (): void {
    // if (this.interval) {
    //     clearInterval(this.interval)
    //     this.interval = null
    // }
  }
}
