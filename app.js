let newsList=[]
const BASE_URL=`https://newsapi2024.netlify.app/top-headlines?`
//const BASE_URL=`http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?`
const menus = document.querySelectorAll('.menus button')

const searchBtn=document.getElementById('searchBtn')

const getNewsByKeyword=async()=>{
  try{
   const keyword =document.getElementById('search-input').value
   const url = new URL(`${BASE_URL}q=${keyword}`)
   const res = await fetch(url)
   const data=await res.json()
 
  newsList = data.articles
  render()
  }catch(error){
    console.log(error,'error')
  }
}

menus.forEach((btn)=>{
  btn.addEventListener('click',(evt)=>getNewsByCategory(evt))
})

const getNewsByCategory=async(evt)=>{
  try{
  
   const category=evt.target.textContent.toLowerCase();
   
  const url= new URL(`${BASE_URL}category=${category}`)
  const res = await fetch(url)
  const data=await res.json()

  newsList = data.articles
  render()
  }catch(error){
    console.log(error,'error!!!!!!')
  }
}

const getLatestNews=async()=>{
  try{
     const url= new URL(BASE_URL)
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