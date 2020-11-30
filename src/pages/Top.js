import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { fetchPopularDate } from '../apis/index';
import { Store } from '../store/index'
import VideoGrid from '../components/VideoGrid/VideoGrid';
import VideoGridItem from '../components/VideoGridItem/VideoGridItem';

const Top = () => {
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchPopularDate().then((responce) => {
            console.log('data', responce)
            setGlobalState({type: 'SET_POPULAR', payload: {popular: responce.data.items}})
        })
    }, [])

    return (
        <Layout>
            <VideoGrid>
                {
                    globalState.popular && globalState.popular.map((popular) => {
                        return (
                            <VideoGridItem 
                                id={popular.id}
                                key={popular.id}
                                src={popular.snippet.thumbnails.medium.url}
                                title={popular.snippet.title} />
                        )
                    })
                }
            </VideoGrid>
        </Layout>
    )
}

export default Top
