import axios from "axios";

const instance =axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "d3cd52861a1369b330136de4466031d9",
        language: "ko-KR",
        include_video: true
    }
});

export default instance;