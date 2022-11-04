const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}
function loadPlanetData(){
return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler_data.csv'))
    //connect parse function to fs stream and dislay data by property object
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    //Recieve the data from the csv file and store in result array
    .on('data', (data) => {
        if (isHabitablePlanet(data)){
            habitablePlanets.push(data);
        }
    })
    //Handle error
    .on('error', (err) => {
        console.log(err)
        reject(err);
    })
    //Indicate if done and print message
    .on('end', () => {
        console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name'];
        }))
        console.log(`${habitablePlanets.length} habitable planets found`);
        console.log('done');
        resolve();
    });
});
}






module.exports = {
    loadPlanetData,
   planets:  habitablePlanets,
};