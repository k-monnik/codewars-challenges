const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump / mpg > fuelLeft) {
        return false;
        console.log("You will have to walk to the gas station.")
    } else {
        return true;
        console.log("You will make it home!")
    }
};