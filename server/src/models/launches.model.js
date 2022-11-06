const launches = new Map();


const launch= {
    flightNumber: 100,
    mission : 'Kepler Exploration X',
    rocket: 'Explorer ISI',
    launchDate: 'December 17, 2030',
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

module.exports = {
    getAllLaunches,
}