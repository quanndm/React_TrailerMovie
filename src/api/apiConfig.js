const apiConfig = {
    baseUrl :"https://api.themoviedb.org/3/",
    apiKey: "dec8508d84cf041d14bf35e1ed11fdce",
    originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Images: (imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig;