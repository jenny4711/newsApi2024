let news=[]
const getLatestNews=async()=>{
  try{
     const url= new URL(`https://newsapi2024.netlify.app/top-headlines?`)
  
    const res = await fetch(url)
    const data=await res.json()
     news = data.articles
    console.log(news)
    console.log(data)

  }catch(error){
    console.log('error-getLatestNews',error)
  }
}

getLatestNews()