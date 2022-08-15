import axios from "axios";

const getFirstHalf = async (setFirstHalf) => {
    const endpoint = 'https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview';

    await axios
      .get(endpoint)
      .then((res) => {
        const firstHalf = {
          fhHomePos: res.data.match.liveData.lineups.home.stats[3].fh,
          fhHomeShots: res.data.match.liveData.lineups.home.stats[0].fh,
          fhHomeTarget: res.data.match.liveData.lineups.home.stats[1].fh,
          fhHomeCorners: res.data.match.liveData.lineups.home.stats[2].fh,
          fhHomeYellows: res.data.match.liveData.lineups.home.stats[4].fh,
          fhHomeReds: '0',
          fhAwayPos: res.data.match.liveData.lineups.away.stats[1].fh,
          fhAwayShots: res.data.match.liveData.lineups.away.stats[3].fh,
          fhAwayTarget: res.data.match.liveData.lineups.away.stats[2].fh,
          fhAwayCorners: res.data.match.liveData.lineups.away.stats[4].fh,
          fhAwayYellows: res.data.match.liveData.lineups.away.stats[0].fh,
          fhAwayReds: '0',
        }
        setFirstHalf(firstHalf);
      })
      .catch((error) => {
        console.log(error, 'Unable to load first half data');
      });
}

export default getFirstHalf;