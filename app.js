let newsList=[]
const BASE_URL=`https://newsapi2024.netlify.app/top-headlines?`
//const BASE_URL= `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?`
let url=new URL(`${BASE_URL}`)
const menus = document.querySelectorAll('.menus button')

const searchBtn=document.getElementById('searchBtn')
const getNews=async()=>{
  try{
    
    const res = await fetch(url)
    const data=await res.json()
   if(res.status !==200)throw new Error(data.message)
   if(data.articles.length === 0)throw new Error('NO Result for this search!')
  newsList = data.articles

  render()
  }catch(error){
    errorRender(error)
console.log(error.message,'eeeeee')
  }
}

const getNewsByKeyword=async()=>{
  try{
  let keyword =document.getElementById('search-input').value
   url = new URL(`${BASE_URL}q=${keyword}`)
  getNews()
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
   
  url= new URL(`${BASE_URL}category=${category}`)
  getNews()
  }catch(error){
    console.log(error,'error!!!!!!')
  }
}

const getLatestNews=async()=>{
  try{
     url= new URL(BASE_URL)

  
    getNews(url)
  }catch(error){
    console.log('error-getLatestNews',error)
  }
}

const errorRender=(error)=>{
  const errorHTML=`
  <div class="alert alert-danger" role="alert">
  ${error.message}
  </div>
  `
  document.getElementById('news-board').innerHTML=errorHTML
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