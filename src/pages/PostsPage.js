import React from 'react';
import PostsList from '../components/PostsList';
import { usePosts } from '../hooks/usePosts';
import Header from '../components/Header';
import ProtectedRoute from '../components/ProtectedRoute';



function App() {

  const [total, posts, loading, error, loadMore] = usePosts();


  return (
    <>
      <ProtectedRoute>
        <Header />
        <div className='container'>
          <div className='post-container'>
            <PostsList
              posts={posts}
              loading={loading}
              error={error}
              total={total}
            />
            {
              total > posts.length && (
                <button
                  disabled={loading} className="load-more" onClick={loadMore}>
                  {loading ? "Loading" : "Load more"}
                </button>)
            }
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
}

export default App;
