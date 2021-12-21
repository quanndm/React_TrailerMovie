import React from 'react'
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/Button';
import HeroSlider from "../components/HeroSlide";
import MoviesList from '../components/MoviesList';
import { category, movieType, tvType } from '../api/tmdbApi';
const Home = () => {
    return (
        <>
            <HeroSlider />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton 
                                className="small"
                            >
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MoviesList category={category.movie} type={movieType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton 
                                className="small"
                            >
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MoviesList category={category.movie} type={movieType.top_rated}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <OutlineButton 
                                className="small"
                            >
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MoviesList category={category.tv} type={tvType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top rated TV</h2>
                        <Link to="/movie">
                            <OutlineButton 
                                className="small"
                            >
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MoviesList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    )
}

export default Home
