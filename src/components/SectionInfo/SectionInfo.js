import React from 'react'
import CompareImage from './CompareImage'
import GroundTruth from './GroundTruth'

export default function SectionInfo() {
  return (
    <div className="container">
      <GroundTruth />
      <CompareImage />
    </div>
  )
}
