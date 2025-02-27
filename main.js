const urlflowers = "https://viragbolt-backend.onrender.com/api/flowers"
const urlcategories = "https://viragbolt-backend.onrender.com/api/categories"
let products = []
function loadCategories(e){
    e.preventDefault()
    console.log(e.target.tagName);
    getData(urlcategories, renderCateg)
    getData(urlflowers, renderFlowers)
}

function renderCateg(data){
    document.querySelector(".lcategories").innerHTML = ""
    console.log(data);
    data.forEach((x)=>{
        document.querySelector(".lcategories").innerHTML += `
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">${x.nev}</button>
        `
    })


}
function filterFlowers(e){
    console.log(e.target.textContent);
    const categ = e.target.textContent
    const filteredData = products.filter((x)=>x.kategoria_nev == categ)
    document.querySelector(".cards").innerHTML = ``
    console.log(filteredData)
    filteredData.forEach(flower => {
      document.querySelector(".cards").innerHTML += `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${flower.kepUrl}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${flower.nev}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${flower.leiras}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Tudj meg többet!
            <button popovertarget="mypopover-${flower.id}"> <svg  class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> </button>
        </a>
    </div>
</div>
<div id="mypopover-${flower.id}" class="popover_container" popover>
        <h3>Kategória: ${flower.kategoria_nev}</h3>
        <img class="popover_img" src="${flower.kepUrl}" alt = "">
        <p>${flower.leiras}</p>
    </div>
`
      
    })
    
}

function renderFlowers(data){
    products = data
    ;

    console.log(data);

}