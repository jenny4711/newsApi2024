let news=[]
const getLatestNews=async()=>{
  try{
    const url= new URL(`http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`)
    const res = await fetch(url)
    const data=await res.json()
     news = data.articles
    console.log(news,'res')

  }catch(error){
    console.log(error,'error-getLatestNews')
  }
}

getLatestNews()