// const url = 'https://api.themoviedb.org/3/discover/movie';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjQ3OTViYjI1ZjlhM2E0NmZkZGJjMGQ0NmU2NzlmNyIsIm5iZiI6MTc2MjY2NzMwMy44NjIwMDAyLCJzdWIiOiI2OTEwMmIyN2FlYmRjMTk5M2Q4NzRmYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bgIwugCSC91gCPMze14OEUkpsJbjjietOuy1xTf9uuY'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));


export const TMDB_CONFIG={
    BASE_URL:'https://api.themoviedb.org/3',
    API_KEY: process.env.TMDB_ACCESS_TOKEN,
    headers:{
        accept: 'application/json',
        authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
}


export const fetchMovies=async ({query}: {query:string}) => {
    const endpoint= '/discover/movie?sort_by=popularity.desc';
    const response= await fetch(endpoint,{
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if(!response){
        
    }
}