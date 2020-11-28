import axios from "axios"

const KEY = process.env.REACT_APP_YOUTUBE_DATA_V3_API_KEY;
console.log('api_key');
console.log(KEY);
console.log(process.env);
console.log('api_key_end');

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
})

export const fetchPopularDate = async () => {
    return await youtube.get('/videos', {
        params: {
            part: 'snippet',
            maxResults: 40,
            key: KEY,
            regionCode: 'JP',
            type: 'video',
            chart: 'mostPopular'
        }
    })
}