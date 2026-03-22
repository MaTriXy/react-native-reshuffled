/**
 * TypeGPU confetti via `typegpu-confetti` + `react-native-wgpu`.
 * Requires a dev build (`npx expo prebuild`); not available in Expo Go.
 * @see https://github.com/software-mansion-labs/typegpu-confetti
 */
import { type ReactNode, createContext, useContext, useMemo } from 'react'
import { ConfettiProvider, useConfetti } from 'typegpu-confetti/react-native'

const BurstContext = createContext<(n: number) => void>(() => {})

/** RGBA tuples: r,g,b in 0–255, a typically 1 (see typegpu-confetti defaults). */
const PUZZLE_CONFETTI_COLORS: [number, number, number, number][] = [
  [97, 218, 251, 1],
  [99, 102, 241, 1],
  [168, 85, 247, 1],
  [236, 72, 153, 1],
  [52, 211, 153, 1],
  [251, 191, 36, 1],
]

export function PuzzleConfettiRoot({ children }: { children: ReactNode }) {
  return (
    <ConfettiProvider
      colorPalette={PUZZLE_CONFETTI_COLORS}
      initParticleAmount={0}
      maxDurationTime={4}
      maxParticleAmount={1400}
      size={1.1}
    >
      <BurstBridge>{children}</BurstBridge>
    </ConfettiProvider>
  )
}

function BurstBridge({ children }: { children: ReactNode }) {
  const ref = useConfetti()
  const burst = useMemo(
    () => (amount: number) => {
      ref?.current?.addParticles(amount)
    },
    [ref]
  )
  return <BurstContext.Provider value={burst}>{children}</BurstContext.Provider>
}

export function usePuzzleConfettiBurst(): (amount: number) => void {
  return useContext(BurstContext)
}
