const launches = new Map();
let latestFlightNumber = 100;

const launch= {
    flightNumber: 100,
    mission : 'Kepler Exploration X',
    rocket: 'Explorer ISI',
    launchDate: new Date('December 17, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};
// const launch2 = {
//     flightNumber: 101,
//     mission : 'Kepler Exploration Z',
//     rocket: 'Explorer ISI',
//     launchDate: 'January 17, 2023',
//     target: 'Kepler-229 b',
//     customer: ['SpaceX', 'NASA'],
//     upcoming: true,
//     success: true,
// };

launches.set(launch.flightNumber, launch);
// launches.set(launch2.flightNumber, launch2);

function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
        upcoming: true,
        success: true,
        customers: ["Zero to Mastery", 'NASA'],
        flightNumber: latestFlightNumber,
    }))
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
}