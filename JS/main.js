const form = document.querySelector('#new-form');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pagesInput = document.querySelector('.pages-input');

    


   form.addEventListener('submit', (e)=>{
       e.preventDefault();
    
       let myLibrary = [];
    
    function Book(title, author, pages, read) {
      // the constructor...
      this.title = titleInput.value;
      this.author = authorInput.value;
      this.pages = pagesInput.value;
    }
    return addBookToLibrary();
    
}) 
function addBookToLibrary(){
    const cardContainer = document.querySelector('#card-container');
    
    const card = document.createElement('div');
    card.classList.add('card')
    cardContainer.appendChild(card);

    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content');
    card.appendChild(cardContent);

    const cardTitle = document.createElement('input');
    cardTitle.type = 'text';
    cardTitle.value = titleInput.value;
    cardTitle.setAttribute('readonly', 'readonly');
    cardContent.appendChild(cardTitle);


    const cardAuthor = document.createElement('input');
    cardAuthor.type = 'text';
    cardAuthor.value = authorInput.value;
    cardAuthor.setAttribute('readony','readonly');
    cardContent.appendChild(cardAuthor)

    const cardPages = document.createElement('input');
    cardPages.type = 'number';
    cardPages.value = pagesInput.value;
    cardPages.setAttribute('readonly','readonly')
    cardContent.appendChild(cardPages);

    const cardActions = document.createElement('div');
    cardActions.classList.add('inputs')
    cardContent.appendChild(cardActions);

    const readButton = document.createElement('button');
    readButton.classList.add('read');
    readButton.innerHTML = 'Read';
    cardActions.appendChild(readButton);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.innerHTML = 'Remove';
    cardActions.appendChild(removeButton)

    removeButton.addEventListener('click', ()=>{
        cardContainer.removeChild(card)
    })


    
    // do stuff here
  }