import React, { useState, useEffect, useCallback } from 'react'
import MovieCard from "./MovieCard";
import { useNavigate, useParams } from 'react-router';
import tmdbApi, { category, movieType, tvType } from '../api/tmdbApi';
import Button, { OutlineButton } from './Button';
import Input from './Input';
const MovieGrid = (props) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const { keyword } = useParams();
    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params })
                        break;
                }
            } else {
                const params = {
                    query: keyword
                };
                response = await tmdbApi.search(props.category, { params })
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);
    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page+1
            };
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, { params })
                    break;
            }
        } else {
            const params = {
                page: page+1,
                query: keyword
            };
            response = await tmdbApi.search(props.category, { params })
        }
        setItems([...items, ...response.results]);
        setPage(page+1)
    }
    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword}/>
            </div>
            <div className="movie-grid">
                {
                    items.map((item, index) => (
                        <MovieCard category={props.category} item={item} key={index} />
                    ))
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className="small" onClick={() => loadMore()}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    )
}
const MovieSearch = (props)=>{
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState(props.keyword?props.keyword:"");
    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                navigate(`/${category[props.category]}/search/${keyword}`);
            }   
        },
        [keyword, props.category, navigate],
    )
    useEffect(() => {
        const enterEvent = (e)=>{
            e.preventDefault();
            if (e.which === 13 || e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener("keyup", enterEvent);
        return()=>{
            document.removeEventListener("keyup", enterEvent);
        }
    }, [keyword, goToSearch])
    return(
        <div className="movie-search">
            <Input 
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={e=>setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )
}
export default MovieGrid
