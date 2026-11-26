function getSafetyData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Safety Data Loaded Successfully");
            resolve("SafeHer Emergency Services");
        }, 2000);
    });
}

async function display() {
    console.log("Start");

    let data = await getSafetyData();

    console.log(data);
    console.log("End");
}

display();