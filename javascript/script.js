

function showPlanet(){
    let btn = document.getElementById('btn');
    btn.addEventListener('click',showData);

    function showData(){
        let name_field = document.getElementById('planet-name');
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd8ef886044msh41d845fa9acd63ep1eb825jsnc6ceabb1a308',
                'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            }
        };
        
        fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options)
            .then(response => response.json())
            .then(planetData=>{
                let planetsInfo = planetData;
            console.log(planetsInfo)
            planetsInfo.forEach(element=>{
                // console.log(element.name)
             if(name_field.value == ""){
               document.querySelector('.message').innerHTML = 'Please select a planet to see data.'
             }else{
                if(name_field.value === element.name){
                    document.querySelector('.object-name').innerHTML = element.name;
                    document.querySelector('.object-weight').innerHTML = `The weight of ${element.name} is ${element['basicDetails'][0].mass}`
                    // document.querySelector('.img-box').innerHTML = `<img src="${element['imgSrc'][0].img} >" 
                    document.querySelector('.img-wrapper').style.opacity = '1'
                    let imgSrc = document.querySelector('.img-box img');
                    imgSrc.src= element['imgSrc'][0].img
                     document.querySelector('.object-description').innerHTML = element.description;
                
                     document.querySelector('.message').innerHTML = '';
                }
             }
            })

            }
                
                )
            .catch(err => console.error(err));
    }
}
showPlanet()
