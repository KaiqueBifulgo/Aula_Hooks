import { useEffect, useState } from "react";

import PropTypes from "prop-types"

const BreedsList = ({getBreeds}) => {
    const [otherBreeds, setOtherBreeds] = useState([]);

    useEffect(() => {
        console.log("Buscando.....");

        setOtherBreeds(getBreeds);
    }, [getBreeds])

  return (
    <div>{otherBreeds && otherBreeds.map((breed) => <p key={breed}> {breed} </p>)}</div>
  )
}

BreedsList.propTypes = {
    getBreeds: PropTypes.node
}

export default BreedsList