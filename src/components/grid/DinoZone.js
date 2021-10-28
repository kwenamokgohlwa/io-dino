import React, { useState, useEffect } from "react"
import styled from "styled-components"

export default function DinoZone({ location, maintain, safe }) {
  const [maintenance, setMaintenance] = useState("")
  useEffect(() => {
    if (maintain === "ignore") {
      setMaintenance("")
    } else if (maintain !== "ignore" && maintain === true) {
      setMaintenance("/images/icons/maintain.svg")
    } else if (maintain !== "ignore" && maintain === false) {
      setMaintenance("")
    }
  }, [maintain])

  const [safety, setSafety] = useState(`#a999ec`)
  useEffect(() => {
    if (safe === "ignore") {
      setSafety(`#a999ec`)
    } else if (safe !== "ignore" && safe === true) {
      setSafety(`#A37834`)
    } else if (safe !== "ignore" && safe === false) {
      setSafety(`#280049`)
    }
  }, [safe])

  return <Zone maintenance={maintenance} safety={safety} />
}

const Zone = styled.div`
  width: 30px;
  height: 30px;

  background-image: url(${props => props.maintenance});
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${props => props.safety};

  border: 3px solid #491eb8;
`
