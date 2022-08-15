import axios from "axios";

const getOverview = async (setOverview) => {
    const endpoint = "https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview"

    await axios
      .get(endpoint)
      .then((res) => {
        const overview = {
          competition: res.data.match.meta.competition.name,
          germany: res.data.match.contestant[0].name,
          france: res.data.match.contestant[1].name,
          homeScore: res.data.match.liveData.matchDetails.scores.ft.home,
          awayScore: res.data.match.liveData.matchDetails.scores.ft.away,
        }
        setOverview(overview);
      })
      .catch((error) => {
        console.log(error, 'Error trying to load match overview');
      });
}

export default getOverview;