import { useEffect, useState } from 'react';
import api from '../axiosInstance';

const LIMIT = 5;


export function usePosts() {
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        getPosts();
    }, [skip]);

    async function getPosts() {
        try {
            setLoading(true)
            const params = { limit: LIMIT, skip }
            const { data } = await api.get(`/posts`, { params })
            setPosts(posts => [...posts, ...data.posts]);
            setTotal(data.total);
        } catch {
            setError('Something went wrong!')
        } finally {
            setLoading(false)
        }
    }

    function loadMore() {
        setSkip(skip => skip + LIMIT);
    }

    return [total, posts, loading, error, loadMore];

}
