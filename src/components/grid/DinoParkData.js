import React, { useState, useEffect } from "react"
import axios from "axios"
import DinoPark from "./DinoPark"

export default function DinoParkData() {
  const [data, setData] = useState([])
  const [dino, setDino] = useState({
    id: 0,
    location: "",
    carnivore: false,
    lastFed: 0,
    digestivePeriod: 0,
  })
  const [dinosaurs, setDinosaurs] = useState([])
  const [zone, setZone] = useState({
    location: "",
    dino: "ignore",
    lastMaintained: 0,
    safe: "ignore",
    maintain: "ignore",
  })
  const [park, setPark] = useState([])

  const processData = () => {
    data.sort(function (a, b) {
      return a.time < b.time ? -1 : a.time > b.time ? 1 : 0
    })
    console.log(data)

    data.forEach(event => {
      switch (event.kind) {
        case "dino_added":
          if (data.length !== 0) {
            setDino({
              id: event.id,
              location: "ignore",
              carnivore: !event.herbivore,
              lastFed: "ignore",
              digestivePeriod: event.digestion_period_in_hours,
            })
            setDinosaurs([...dinosaurs, dino])
          }

          break
        case "dino_removed":
          if (data.length !== 0) {
            setDinosaurs(
              dinosaurs.filter(dino => dino.id !== event.dinosaur_id)
            )
          }

          break
        case "dino_location_update":
          if (data.length !== 0) {
            const dinoLocationIndex = dinosaurs.findIndex(
              dino => dino.id === event.dinosaur_id
            )

            let tempDinosaursLocation = dinosaurs
            tempDinosaursLocation[dinoLocationIndex].location = event.location

            setDinosaurs(tempDinosaursLocation)
          }

          break
        case "dino_fed":
          if (data.length !== 0) {
            const dinoFedIndex = dinosaurs.findIndex(
              dino => dino.id === event.dinosaur_id
            )

            let tempDinosaursFed = dinosaurs
            tempDinosaursFed[dinoFedIndex].lastFed = event.time

            console.log("dino: " + tempDinosaursFed[dinoFedIndex])
            console.log("lastFed: " + tempDinosaursFed[dinoFedIndex].lastFed)
            console.log("event.time: " + event.time)

            setDinosaurs(tempDinosaursFed)
          }

          break
        case "maintenance_performed":
          if (data.length !== 0) {
            setZone({
              location: event.location,
              dino: "ignore",
              lastMaintained: event.time,
              safe: "ignore",
              maintain: "ignore",
            })
            setPark([...park, zone])
          }
          break
      }
    })
  }

  const processDinosaurs = () => {
    dinosaurs.forEach(dino => {
      const zoneIndex = park.findIndex(zone => zone.location === dino.location)
      if (zoneIndex === -1) {
        setZone({
          location: dino.location,
          dino: dino,
          lastMaintained: "ignore",
          safe: "ignore",
          maintain: "ignore",
        })

        setPark([...park, zone])
      } else {
        let tempZone = park[zoneIndex]
        tempZone.dino = dino
        setZone(tempZone)

        let tempPark = park
        tempPark[zoneIndex] = zone

        setPark(tempPark)
      }
    })
  }

  const processPark = () => {
    let updatedPark = park
    let currentTime = new Date()

    park.forEach((zone, index) => {
      let lastMaintained = zone.lastMaintained
        ? new Date(zone.lastMaintained)
        : 0
      //maintenance
      if (zone.lastMaintained === "ignore") {
        updatedPark[index].maintain = "ignore"
      } else if (
        zone.lastMaintained !== "ignore" &&
        Math.abs(currentTime - lastMaintained) / (1000 * 60 * 60 * 24) < 30
      ) {
        updatedPark[index].maintain = true
      } else {
        updatedPark[index].maintain = false
      }

      let lastFed = zone.dino.lastFed ? new Date(zone.dino.lastFed) : 0
      //safety
      if (zone.dino === "ignore") {
        updatedPark[index].safe = true
      } else if (
        zone.dino !== "ignore" &&
        zone.dino.carnivore === true &&
        Math.abs(currentTime - lastFed) / (60 * 60 * 1000) <
          zone.dino.digestivePeriod
      ) {
        updatedPark[index].safe = true
      } else if (zone.dino !== "ignore" && zone.dino.carnivore === false) {
        updatedPark[index].safe = true
      } else {
        updatedPark[index].safe = false
      }
    })

    setPark(updatedPark)
  }

  useEffect(() => {
    const fetchData = async () => {
      axios.get("https://dinoparks.net/nudls/feed").then(res => {
        setData(res.data)
      })
    }

    fetchData()
    processData()
    processDinosaurs()
    processPark()
  })

  return (
    <>
      <DinoPark updates={data.length !== 0 ? data : []} />
    </>
  )
}
