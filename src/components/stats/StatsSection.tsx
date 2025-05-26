'use client'
import { SectionContainer } from '../ui/SectionContainer'
import { StatsCounter } from './StatsCounter'

export function StatsSection() {
  return (
    <SectionContainer className="!p-0">
      <StatsCounter />
    </SectionContainer>
  )
}