let news=[]
const getLatestNews=async()=>{
  try{
    const url= new URL(`https://main--newsapi2024.netlify.app`)
    const res = await fetch(url)
    const data=await res.json()
     news = data.articles
    console.log(news,'res')

  }catch(error){
    console.log(error,'error-getLatestNews')
  }
}

getLatestNews()