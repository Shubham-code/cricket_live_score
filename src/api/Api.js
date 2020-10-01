const API_KEY ="TCTcgDaJDrUonHAOK2VNUuKUZ9r2";

//get all the {upcoming matches}
export const getMatches=async ()=>{
    const url = ` https://cricapi.com/api/matches?apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        return console.log("ERROR:", error);
    }
}

//load match details

export const getmatchDetails=async (id)=>{
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        return console.log("Error:", error);
    }

}