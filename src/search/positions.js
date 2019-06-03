export const positions = {
  ATTACKING_MIDFIELD: "Attacking Midfield",
  CENTRAL_MIDFIELD: "Central Midfield",
  CENTRE_BACK: "Centre-Back",
  CENTRE_FORWARD: "Centre-Forward",
  KEEPER: "Keeper",
  LEFT_BACK: "Left-Back",
  RIGHT_BACK: "Right-Back",
  DEFENSIVE_MIDFIELD: "Defensive Midfield",
  LEFT_MIDFIELD: "Left Midfield",
  LEFT_WING: "Left Wing"
}

export const positionsMap = Object.keys(positions).map((position) => ({
  label: positions[position],
  value: position
}))

export const positionLabelFromKey = (key) => positionsMap.find((option) => option.value === key);