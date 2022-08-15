import axios from "axios";

const getFullMatch =  async (setFullMatch) => {
    const endpoint = "https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview";

    await axios
      .get(endpoint)
      .then((res) => {
        const fullMatch = {
          homePos: res.data.match.liveData.lineups.home.stats[3].value,
          homeShots: res.data.match.liveData.lineups.home.stats[0].value,
          homeTarget: res.data.match.liveData.lineups.home.stats[1].value,
          homeCorners: res.data.match.liveData.lineups.home.stats[2].value,
          homeYellows: res.data.match.liveData.lineups.home.stats[4].value,
          homeReds: '0',
          awayPos: res.data.match.liveData.lineups.away.stats[1].value,
          awayShots: res.data.match.liveData.lineups.away.stats[3].value,
          awayTarget: res.data.match.liveData.lineups.away.stats[2].value,
          awayCorners: res.data.match.liveData.lineups.away.stats[4].value,
          awayYellows: res.data.match.liveData.lineups.away.stats[0].value,
          awayReds: '0',
        }
        setFullMatch(fullMatch)
      })
      .catch((error) => {
        console.log(error, 'Unable to load full match data');
      });
}

export default getFullMatch;