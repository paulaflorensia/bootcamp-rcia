document.getElementById('title').addEventListener
('click', loadREST); //loadREST function's name

//list of films
function loadREST() {
    fetch('https://swapi.co/api/films/')
    .then(function(response){
        return response.json();
    })
    .then(function(titlefilm){
        let html = '';

        titlefilm.results.forEach(function(film){
            html += `
                <option>
                    ${film.title}
                </option>
            `;
        });
        document.getElementById('allfilms').innerHTML =
        html;
    })    
    .catch(function(error){
        console.log(error);
    })
}

//result for each film

document.getElementById('allfilms').addEventListener
('click', loadREST2); //loadREST2 function's name

function loadREST2() {
    fetch('https://swapi.co/api/films/')
    .then(function(response2){
        return response2.json();
    })    
    .then(function(moreinfo){
            let html = '';
    
            moreinfo.results.forEach(function(film){
                html += `
                    <li>
                    ${film.title}
                    <p>Episode: ${film.episode_id}<br>
                    Director: ${film.director}<br>
                    Producer: ${film.producer}<br>
                    Release date: ${film.release_date}<br></p>
                    <p>Opening crawl: ${film.opening_crawl}</p><br>
                    </li>
                `;
            });
            document.getElementById('result').innerHTML =
            html;
        })    
        .catch(function(error){
            console.log(error);
        })
}
   
