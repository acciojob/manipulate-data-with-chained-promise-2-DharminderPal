function numberlo() {
    return new Promise((resolve, reject) => {
        // Simulating delay of 3 seconds
        setTimeout(() => {
            resolve([1, 2, 3, 4]);  // Resolving array [1, 2, 3, 4]
        }, 3000);
    });
}

numberlo()
    .then((koi_value_pass_kro) => {
        // Step 1: Filter even numbers after 1 second
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const evenNumber = koi_value_pass_kro.filter((pass_the_value) => pass_the_value % 2 === 0);
                document.getElementById("output").textContent = "Even Numbers: " + evenNumber.join(", ");
                resolve(evenNumber);  // Resolving even numbers for the next step
            }, 1000);
        });
    })
    .then((evenNumber) => {
        // Step 2: Multiply even numbers by 2 after 2 seconds
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const multi = evenNumber.map((pass_any_value) => pass_any_value * 2);
                document.getElementById("output").textContent = "Multiplied by 2: " + multi.join(", ");
                resolve(multi);  // Returning multiplied array
            }, 2000);
        });
    })
    .catch((error) => {
        console.log(error);  // Catching any errors
    });
