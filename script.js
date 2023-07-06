window.addEventListener("scroll", function() {
    var positionInfoElements = document.getElementsByClassName("position-info");
    
    for (var i = 0; i < positionInfoElements.length; i++) {
      var element = positionInfoElements[i];
      var position = element.getBoundingClientRect();
      
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add("visible");
      }
    }
  });
  window.addEventListener("scroll", function() {
    var positionInfoElements = document.getElementsByClassName("position-info2");
    
    for (var i = 0; i < positionInfoElements.length; i++) {
      var element = positionInfoElements[i];
      var position = element.getBoundingClientRect();
      
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add("visible");
      }
    }
  })
// Função para pesquisar os dados da API com base na entrada do usuário
function searchSWAPI(searchTerm) {
  const searchUrl = `https://swapi.dev/api/?search=${searchTerm}`;

  fetchData(searchUrl)
    .then(data => displaySearchResults(data.results))
    .catch(error => console.log(error));
}

// Função para exibir os resultados da pesquisa
function displaySearchResults(results) {
  const searchResultsContainer = document.getElementById('search-results');
  searchResultsContainer.innerHTML = '';

  results.forEach(result => {
    const resultElement = document.createElement('p');
    resultElement.textContent = result.name || result.title;
    searchResultsContainer.appendChild(resultElement);
  });
}

// Função para manipular o evento de clique no botão de pesquisa
function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value;

  searchSWAPI(searchTerm);
}

// Adicionar ouvinte de evento para o clique no botão de pesquisa
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', handleSearch);

  
  
  
  
  
  