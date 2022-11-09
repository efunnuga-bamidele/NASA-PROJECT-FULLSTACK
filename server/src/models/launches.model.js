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

launches.set(launch.flightNumber, launch);

function exitsLaunchWithId(launchId) {
    return launches.has(launchId);
}

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

function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}


module.exports = {
    exitsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById
}