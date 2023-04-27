function Score(props) {
    // Number of digits in counter
    const counterPlaces = 3
    function Counter() {
        let counter = 0;
        return function incrementCounter() {
            counter++;
        }
    }
    // Increment counter when score increases
    // Split counter into digits (reverse order)
    let newCounterDigits = [];
    while (counter) {
        newCounterDigits.push(counter % 10);
        counter = Math.floor(counter/10);
    }
    // Append leading zeros
    if (newCounterDigits.length < counterPlaces) {
        for (let i = 0; i < (counterPlaces - newCounterDigits.length); i++){
            newCounterDigits.push(0);
        }
    }
    // Animate each digit as it rolls over
    // Get current digits in reverse order
    let oldCounterDigits = [];
    for (let i = 0; i < counterPlaces; i++) {
        if (oldCounterDigits[i] != newCounterDigits[i]) {
            // TODO Animate rollover from right to left
        }
    }

}

export default Score