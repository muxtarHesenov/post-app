import { useCallback, useEffect, useState } from 'react';
import api from '../axiosInstance';

const LIMIT = 10;


export function usePosts() {
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');




    const getPosts = useCallback(
        async function () {
            try {
                setError('')
                setLoading(true)
                const params = { limit: LIMIT, skip }
                const { data } = await api.get(`/posts`,
                    {
                        params
                        
                    })
                setPosts(function (oldPosts) {
                    return [...oldPosts, ...data.posts];
                });
                setTotal(data.total);
            } catch {
                setError('Something went wrong!')
            } finally {
                setLoading(false)
            }
        }, [skip]);


    useEffect(() => {

        getPosts();

    }, [skip], getPosts);



    function loadMore() {
        setSkip(function (oldSkip) {
            return oldSkip + LIMIT;
        });
    }

    return [total, posts, loading, error, loadMore];

}
