const post = [
    {
      imageUser: 'https://unsplash.it/300/300?image=15',
      name: 'Phil Mangione',
      timePost: '4 mesi fa',
      textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
      image: 'https://unsplash.it/600/300?image=171',
      id: 'like-counter-1',
      like: '80',
    },
    {
    imageUser: 'https://unsplash.it/300/300?image=16',
    name: 'Phil Mangione',
    timePost: '5 mesi fa',
    textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image: 'https://unsplash.it/300/300?image=172',
    id: 'like-counter-2',
    like: '100',
    },
    {
    imageUser: 'https://unsplash.it/300/300?image=17',
    name: 'Phil Mangione',
    timePost: '6 mesi fa',
    textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image: 'https://unsplash.it/600/300?image=173',
    id: 'like-counter-3',
    like: '120',
    },
    
    
];

const postHtml = document.querySelector('.posts-list');

for (let i = 0; i < post.length; i++) {
  
    postHtml.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post[i].imageUser}" alt="${post[i].name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post[i].name}</div>
                    <div class="post-meta__time">${post[i].timePost}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${post[i].textPost}</div>
        <div class="post__image">
            <img src="${post[i].image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="${post[i].id}" class="js-likes-counter">${post[i].like}</b> persone
                </div>
            </div> 
        </div>            
    </div> `
  
}