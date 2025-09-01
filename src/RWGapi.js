const API_KEY=import.meta.env.VITE_API_KEY;
const BASE_URL=import.meta.env.VITE_BASE_URL;

export const fetchsearch = async(query)=>{

    try{
        const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&search=${query}&page_size=20&ordering=-added`);
        const data =  await response.json();

        return data || [];
        
        
        
    }catch(err){
      console.log("Error fetching search results:", err);

    }
    
  }


  export const fetchBanner=async()=>{
      try{
        const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic&platforms=187,186,18,1`);
      const data = await response.json();
      return data.results[Math.floor(Math.random() * data.results.length)];
      
      }catch(err){
          console.log("Something went wrong:",err);
      }
      
    }



export const fetchPopularGames = async ()=>{
  try{
     const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&ordering=-added`);

      const data=await response.json();

      return data.results;
      
    //   console.log(data.results);
  }catch(err){
    console.log("Something went wrong:",err);
  }


}


export const fetchDetails = async (id)=>{
  try{
     const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);

      const data=await response.json();

      return data;
      
  }catch(err){
    console.log("Something went wrong:",err);
  }

}

