const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const ids = ["van-btnLike", "gustave-btnLike", "joseph-btnLike"]
const classes = ["van-noOfLikes", "gustave-noOfLikes", "joseph-noOfLikes"]

const mainSection = document.getElementById("main-section")

function render(listofPost) {
    let listItems = ""

    for (let i = 0; i < listofPost.length; i += 1) {
        

        listItems += `
            <div class="container first-section">
                <img class="avatar-image" src="${listofPost[i].avatar}" />
                <div>
                    <p class="bold-text">${listofPost[i].name}</p>
                    <p class="small-text">${listofPost[i].location}</p>
                </div>
            </div>
            
            <div class="container">
                <img  id="main-image" src="${listofPost[i].post}" />
            </div>
            
            <div class="container second-section">
                <div>
                    <button id=${ids[i]}>
                        <img class="icon" src="images/icon-heart.png" />
                    </button>
                    <img class="icon" src="images/icon-comment.png" />
                    <img class="icon" src="images/icon-dm.png" />
                </div>
                <p class="bold-text ${classes[i]}">${listofPost[i].likes} likes</p>
                <p class="last-text"><span class="bold-text">${listofPost[i].username}</span> ${listofPost[i].comment}</p>
            </div>
        `
    }

    mainSection.innerHTML = listItems
}

// First render
render(posts)

const vanBtnLike = document.getElementById("van-btnLike")
const vanNoLikes = document.querySelector(".van-noOfLikes")
const gustaveBtnLike = document.getElementById("gustave-btnLike")
const gustaveNoLikes = document.querySelector(".gustave-noOfLikes")
const josephBtnLike = document.getElementById("joseph-btnLike")
const josephNoLikes = document.querySelector(".joseph-noOfLikes")

vanBtnLike.addEventListener("click", function() {
    let vanLikes = posts[0].likes
    vanLikes += 1
    posts[0].likes = vanLikes
    vanNoLikes.textContent = vanLikes + " likes"
})

gustaveBtnLike.addEventListener("click", function() {
    let gustaveLikes = posts[1].likes
    gustaveLikes += 1
    posts[1].likes = gustaveLikes
    gustaveNoLikes.textContent = gustaveLikes + " likes"
})

josephBtnLike.addEventListener("click", function() {
    let josephLikes = posts[2].likes
    josephLikes += 1
    posts[2].likes = josephLikes
    josephNoLikes.textContent = josephLikes + " likes"
})





