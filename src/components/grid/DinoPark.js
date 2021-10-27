import React, { useState, useEffect } from "react"
import DinoZone from "./DinoZone"
import styled from "styled-components"

export default function DinoPark() {
  const [park, setPark] = useState(() => {
    const initPark = []
    for (let row = 0; row < 16; row++) {
      initPark.push([])
      for (let col = 0; col < 26; col++) {
        var chr = String.fromCharCode(97 + col).toUpperCase()
        initPark[row].push({
          location: chr + row,
          maintain: undefined,
          safe: undefined,
        })
      }
    }
    return initPark
  })

  console.log(park)

  return (
    <Park>
      {park.map((row, i) => {
        return (
          <Section key={i}>
            {row.map((zone, j) => (
              <Zone>
                <DinoZone
                  key={zone.location}
                  maintain={zone.maintain}
                  safe={zone.safe}
                />
              </Zone>
            ))}
          </Section>
        )
      })}
    </Park>
  )
}

const Park = styled.div`
  overflow: hidden;
  border: 4px solid #491eb8;
`

const Section = styled.div`
  overflow: hidden;
`

const Zone = styled.div`
  float: left;
`
