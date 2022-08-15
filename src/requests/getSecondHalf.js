import axios from "axios";

const getSecondHalf = async (setSecondHalf) => {
    const endpoint = 'https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview';

    await axios
      .get(endpoint)
      .then((res) => {
        const secondHalf = {
          shHomePos: res.data.match.liveData.lineups.home.stats[3].sh,
          shHomeShots: res.data.match.liveData.lineups.home.stats[0].sh,
          shHomeTarget: res.data.match.liveData.lineups.home.stats[1].sh,
          shHomeCorners: res.data.match.liveData.lineups.home.stats[2].sh,
          shHomeYellows: res.data.match.liveData.lineups.home.stats[4].sh,
          shHomeReds: '0',
          shAwayPos: res.data.match.liveData.lineups.away.stats[1].sh,
          shAwayShots: res.data.match.liveData.lineups.away.stats[3].sh,
          shAwayTarget: res.data.match.liveData.lineups.away.stats[2].sh,
          shAwayCorners: res.data.match.liveData.lineups.away.stats[4].sh,
          shAwayYellows: res.data.match.liveData.lineups.away.stats[0].sh,
          shAwayReds: '0',
        }
        setSecondHalf(secondHalf);
    })
    .catch((error) => {
        console.log(error, 'Unable to load second half data');
    });
}

export default getSecondHalf;