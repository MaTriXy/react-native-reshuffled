import { Cell } from '../../algorithm'
import { getNewGrid as defaultGetNewGrid } from '../../algorithm/algorithmJS'
import React from 'react'
import type { ReshufflableGridProps } from './types'
import { ReshufflableGridCore } from './ReshufflableGridCore'

export default function ReshufflableGrid<T extends Cell>(
  props: ReshufflableGridProps<T>
) {
  const { getNewGrid: getNewGridOverride, ...rest } = props
  return (
    <ReshufflableGridCore
      {...rest}
      getNewGrid={getNewGridOverride ?? defaultGetNewGrid}
    />
  )
}
