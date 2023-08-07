export type ValueOf<P, K extends keyof P = keyof P> = K extends keyof P ? P[K] : never
