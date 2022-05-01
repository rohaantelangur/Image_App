const getinput = () => {
  let searchword = document.getElementById("SearchImage").value;
  console.log(searchword);
  debounce(searchword);
};

let id;
const debounce = async (data) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    localStorage.setItem("word", JSON.stringify(data));
    sort();
  }, 500);
};

const getdata = async (url) => {
  try {
    let res = await fetch(url);
    let result = await res.json();
    console.log(result);
    append1(result.results);
    // return result
  } catch (error) {
    console.log(error);
  }
};

const append1 = (data) => {
  let show = (document.getElementById("show-data").innerHTML = null);
  data.map(function (element) {
    let image = document.createElement("img");
    image.src = element.urls.small;
    image.style.width = "100%";
    let div = document.createElement("div");
    div.append(image);
    document.getElementById("show-data").append(div);
  });
};

const mixwordinurl = (word, sort, filt) => {
  let url = `https://api.unsplash.com/search/photos?page=1&query=${word}&per_page=20&order_by=${sort}&orientation=${filt}&client_id=xjuQqDjtXdwJG2gnCgrOhGzR2bxiQX17r0mxiY8kbJ8`;
  getdata(url);
};

// let x = document.querySelector("#Navbar2").children;

// for (let el of x) {
//   el.addEventListener("click", show);
// }


function show() {
  event.preventDefault();
  localStorage.setItem("word", JSON.stringify(this.id));

  sort();
  // console.log(this.id);
}

function show2() {
  event.preventDefault();
  localStorage.setItem("filter", JSON.stringify(this.id));

  sort();
  // console.log(this.id);
}

const sort = ()=> {
  let word = JSON.parse(localStorage.getItem("word"));
  let filt = JSON.parse(localStorage.getItem("filter")) || "squarish";
  // console.log(word);
  let sort = document.getElementById("sort-select").value;
  
  // console.log(sort);
  mixwordinurl(word, sort, filt);
}

// let y = document.querySelector("#filter").children;

// for (let el of y) {
//   el.addEventListener("click", show2);
// }

// document.getElementById("sort-select").addEventListener("change", sort);
// document.getElementById("SearchImage").addEventListener("input", getinput);

export { getinput, sort, show, show2 };
