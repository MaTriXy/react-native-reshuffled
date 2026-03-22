/**
 * Fallback module for TypeScript and for bundlers that resolve `PuzzleConfettiRoot` without a
 * platform suffix. Metro still prefers `PuzzleConfettiRoot.native.tsx` / `.web.tsx` when bundling.
 * API matches `.web` (no-op burst) — same as the web stub.
 */
import { type ReactNode, createContext, useContext } from 'react'

const BurstContext = createContext<(n: number) => void>(() => {})

export function PuzzleConfettiRoot({ children }: { children: ReactNode }) {
  return (
    <BurstContext.Provider value={() => {}}>{children}</BurstContext.Provider>
  )
}

export function usePuzzleConfettiBurst(): (amount: number) => void {
  return useContext(BurstContext)
}
