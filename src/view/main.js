import "../components/ghibli-list.js";

function main(){
    const ghibliListElement = document.querySelectorAll("ghibli-list");

    const filmsList = () =>{
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then((response) => response.json())
        .then((responseJson) => {
            renderResult([responseJson,true]);
        })
        .catch((error) => {
            fallbackResult(error);
        });
    };

    const renderResult = (results, i=0) => {
        ghibliListElement[i].films = results;
    };

    const fallbackResult = (message, i=0) => {
        ghibliListElement[i].renderError(message);
    };

    filmsList();
}
export default main;