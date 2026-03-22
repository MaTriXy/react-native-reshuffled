import { type ReactNode, createContext, useContext } from 'react'

const BurstContext = createContext<(n: number) => void>(() => {})

/** Web: WebGPU confetti is not wired in this example; burst is a no-op. */
export function PuzzleConfettiRoot({ children }: { children: ReactNode }) {
  return (
    <BurstContext.Provider value={() => {}}>{children}</BurstContext.Provider>
  )
}

export function usePuzzleConfettiBurst(): (amount: number) => void {
  return useContext(BurstContext)
}
