let newsList=[]
const getLatestNews=async()=>{
  try{
     const url= new URL(`https://newsapi2024.netlify.app/top-headlines?`)
    // const url= new URL(`http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?`)
  
    const res = await fetch(url)
    const data=await res.json()
     newsList = data.articles
    console.log(newsList)
    console.log(data)
render()
  }catch(error){
    console.log('error-getLatestNews',error)
  }
}


const render=()=>{
  let newsHTML;
newsHTML=newsList.map((news)=>`<div class="row news">
<div class="col-lg-4">
    <img class="news-img" src="${news.urlToImage}"/>
</div>
<div class="col-lg-8">
    <h2>${news.title}</h2>
    <p>${news.description}</p>
    <div>
        ${news.source.name}*${news.publishedAt}
    </div>
</div>
</div>`).join("");

  document.getElementById('news-board').innerHTML=newsHTML
}

getLatestNews()