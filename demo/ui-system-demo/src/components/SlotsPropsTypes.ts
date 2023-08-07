import { type SlotsEnum } from './SlotsEnum'

export type SlotsPropsTypes = {
  [SlotsEnum.CLICKER]: Record<string, unknown>
  [SlotsEnum.LOGO]: Record<string, unknown>
  [SlotsEnum.DOCS]: Record<string, unknown>
}
