/* to push onto main */

var YTAPIkey = "AIzaSyD_7qskIScu2G9J1dWitB2PLLZXyfvabIU";
// AIzaSyD_7qskIScu2G9J1dWitB2PLLZXyfvabIU
// 1: AIzaSyCREkvLlXKzAhqOjjsVunYzIyDuAXJJjWI
var videoSearch = "dog"
// var genre = $("#select-genre");
var cuisine = "french";
var userGenre;
var genreRadios = document.getElementsByName("genre");
var YTdata;
var videos = []
var currentVideoIndex = 0;
var carousel = document.querySelector(".carouselbox");
var nextBtn = carousel.querySelector(".next");
var previousBtn = carousel.querySelector(".previous");
var searchButton = document.querySelector('#search');
var cuisine;
var searchButton = document.querySelector('#search');
var cuisine;

function selectCountry(country) {
  cuisine = country
}

// retrieving the user's input from genres and country's section
$("#continue-from-music").on("click", function(event){
    event.preventDefault();

    getGenre();
    getFakeYTdata();
})

function getGenre () {

    for (var i = 0, length = genreRadios.length; i < length; i++) {
        if (genreRadios[i].checked) {

            userGenre = genreRadios[i].value;

            // if a radio isn't checked, then stop the for loop
            break;
        }
        }
        if (userGenre === undefined || userGenre === null) {
            document.getElementById('id01').style.display = 'block';
        }
}


var getFakeYTdata = function () {
    var fakeData = {
        "kind": "youtube#searchListResponse",
        "etag": "q3Zjdb5AXXe32RWx8Dx8s-h4c78",
        "nextPageToken": "CAEQAA",
        "regionCode": "US",
        "pageInfo": {
          "totalResults": 1000000,
          "resultsPerPage": 1
        },
        "items": [
          {
            "kind": "youtube#searchResult",
            "etag": "251ciU54FGaZxfwREouXUOp85Yk",
            "id": {
              "kind": "youtube#video",
              "videoId": "L818dKnixGs"
            },
            "snippet": {
              "publishedAt": "2022-08-15T17:43:52Z",
              "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
              "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 44",
              "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Meowthemall",
              "liveBroadcastContent": "none",
              "publishTime": "2022-08-15T17:43:52Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "251ciU54FGaZxfwREouXUOp85Yk",
            "id": {
              "kind": "youtube#video",
              "videoId": "3CuAboWK1ec"
            },
            "snippet": {
              "publishedAt": "2022-08-15T17:43:52Z",
              "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
              "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 44",
              "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Meowthemall",
              "liveBroadcastContent": "none",
              "publishTime": "2022-08-15T17:43:52Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "251ciU54FGaZxfwREouXUOp85Yk",
            "id": {
              "kind": "youtube#video",
              "videoId": "jRetP9JmmO4"
            },
            "snippet": {
              "publishedAt": "2022-08-15T17:43:52Z",
              "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
              "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 44",
              "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Meowthemall",
              "liveBroadcastContent": "none",
              "publishTime": "2022-08-15T17:43:52Z"
            }
          }
        ]
    }

    YTdata = fakeData;
    buildYTurl();
}

var getYTdata = function () {
    var queryUrlYT = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q=" + cuisine + "+" + userGenre + "+" + "music&videoDuration=short&type=video&key=" + YTAPIkey;
    //console.log(queryUrlYT);
    fetch(queryUrlYT)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                   //console.log(typeof(data.items[0].id.videoId));
                    YTdata = data;
                    //carouselBtn(0);

                       // buildYTurl();

                    //videoSearchEl.innerHTML =
                    // for (var i = 0, length = genreRadios.length; i < length; i++) {
                    //     if (genreRadios[i].checked) {

                    //       alert(genreRadios[i].value);
                    //       console.log(genreRadios[i].value);

                    //       // if a radio isn't checked, then stop the for loop
                    //       break;
                    //     }
                    //   }
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to the YouTube API ');
    });
};


// getFakeYTdata();
// //console.log(YTdata);

function buildYTurl () {
    videos = [];
    for (var i in YTdata.items) {
        console.log(YTdata.items[i].id.videoId);
        videos.push("https://www.youtube.com/embed/" + YTdata.items[i].id.videoId + "?autoplay=1")
    }
    carouselBtn(0);
}

function carouselBtn(position) {
    currentVideoIndex = currentVideoIndex + position;
    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
    } else if (currentVideoIndex > videos.length - 1) {
        currentVideoIndex = 0;
    }

    console.log(videos[currentVideoIndex])
    document.getElementById("carouselVideos").src = videos[currentVideoIndex];

}

  nextBtn.addEventListener("click", function(event) {
    event.stopPropagation();

    carouselBtn(1);
  });

  previousBtn.addEventListener("click", function(event) {
    event.stopPropagation();

    carouselBtn(-1);
  });



var searchButton = document.querySelector('#search');


searchButton.addEventListener('click', () => {
  console.log('button clicked');
  var inputValue = document.getElementById('myInput').value;
  console.log(inputValue);
  sendApiRequest(inputValue);
});

async function sendApiRequest(inputValue) {
  let APP_ID = '7bb5e52a';
  let API_KEY = '0c1e8ad80757342d9801acaefa2e9df0';
  console.log(inputValue);
  let response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&q=${inputValue}`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

function useApiData(data) {
  // 4 RESULTS
  for (var i = 0; i < 4; i++) {
    var image = document.createElement('img');
    var title = document.createElement('h1');
    var ingredients = document.createElement('p');
    var serving = document.createElement('p');
    var calories = document.createElement('p');
    var fat = document.createElement('p');
    var protein = document.createElement('p');
    var carbs = document.createElement('p');
    var sodium = document.createElement('p');
    var link = document.createElement('p');

    // foodImgEl.setAttribute("src", imgURL);
    // foodImgEl.setAttribute("alt", "Picture of prepared recipe");

    // Image
    // image.textContent = data.hits[i].recipe.image;
    // console.log(image);
    // Title
    title.textContent = data.hits[i].recipe.label;
    console.log(title);
    // Ingredients
    ingredients.textContent = data.hits[i].recipe.ingredientsLines;
    console.log(ingredients);
    // Serving Size
    serving.textContent = data.hits[i].recipe.yield;
    console.log(serving);
    // Total Calories
    calories.textContent = data.hits[i].recipe.calories.toFixed(2);
    console.log(calories);
    // Total Fat
    fat.textContent = data.hits[i].recipe.digest[0].total.toFixed(2);
    console.log(fat);
    // Total Carbs
    carbs.textContent = data.hits[i].recipe.digest[1].total.toFixed(2);
    console.log(carbs);
    // Total Protein
    protein.textContent = data.hits[i].recipe.digest[2].total.toFixed(2);
    console.log(protein);
    // Total Sodium
    sodium.textContent = data.hits[i].recipe.digest[3].total.toFixed(2);
    console.log(sodium);
    // Link
    link.textContent = data.hits[i].recipe.shareAs;
    console.log(link);

    // TODO: append to actual card / this is for testing
    // document.body.appendChild(image);
    document.body.appendChild(title);
    document.body.appendChild(ingredients);
    document.body.appendChild(serving);
    document.body.appendChild(calories);
    document.body.appendChild(fat);
    document.body.appendChild(protein);
    document.body.appendChild(carbs);
    document.body.appendChild(sodium);
    document.body.appendChild(link);
  }
}

