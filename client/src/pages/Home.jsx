import React, {useState, useEffect} from 'react';

import {Card, FormField, Loader} from '../components';


const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setsearchText] = useState('');

  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null)

  // http://localhost:8080/api/v1/post

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // console.log(response.json())

      if (response.ok) {
        const result = await response.json();
        
        setAllPosts(result.data.reverse());
      }

    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setsearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchedResults = allPosts.filter((item) =>  item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));

        setSearchedResults(searchedResults)
      })
    )
  }

  return (
    <section>
      <div>
        <h1 className='font-extrabold text-[#79a5da] text-[32px]'>Image Square</h1>
        <p className='mt-2 text-[#79a5da] text-[16px] max-w[500px]'>Welcome to the AI Image lover square! </p>
        <p className='mt-2 text-[#79a5da] text-[16px] max-w[500px]'>Feel Free to browse through AI images, collect other's posts and create your owns!</p>
      </div>

      <div className='mt-16'>
        <FormField 
          labelName="Search posts"
          type='text'
          name="text"
          placeholder="Search posts"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
            {/*  "searchText &&" means "if there is any searchText" */}
            {searchText && (
              <h2 className='font-medium text-[#79a5da] text-xl mb-3'>
                Showing results for <span className='text-[#ceadf0]'>{searchText}</span>
              </h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {searchText? (
                <RenderCards 
                  data={searchedResults}
                  title="No posts found, try another one🥲."
                />
              ) :(
                <RenderCards 
                  data={allPosts}
                  title="No posts found"
                />
              )
            }
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home;