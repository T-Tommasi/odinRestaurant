import CreateNewDiv from "./divCreator";

//Reminder on divCreator:
    //.addClass() to add a class
    //.addContent() to write the inner HTML -- remember to use '' for writing the HTML!!!
    //.appendDiv() to append the div somewhere
    //.getDiv() to get the div data


export function HomePage(parent) {
    console.log('Function imported, wohoo!')
    function heading(parent) {
        let heading = new CreateNewDiv()
            .addClass('heading')
            .addClass('flex')
            .addContent('<h1>Welcome to the <strong>Odin Restaurant</strong></h1><h4>We are a widely known restaurant on gitHub avenue, come try our plates of cooked bugs!</h4>')
            .appendDiv(parent)
    };

    function centralBody(parent) {
        let body = new CreateNewDiv()
            .addClass('centralBody')
            .addClass('flex')
            .addContent(`<p>lorem ipusm sit dolor amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ea. Cum quia similique optio. Provident dolore error dolorum libero consectetur</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ea. Cum quia similique optio. Provident dolore error dolorum libero consectetur</p><img src='./restaurant.jpg'></img>`)
            .appendDiv(parent)
    };

    function lowerBody(parent) {
        let lowerBody = new CreateNewDiv()
            .addClass('lowerBody')
            .addClass('flex')
            .addContent('<h5>We are open:</h5><ul><li>12:00 - 24:00 weekdays</li><li>07:00 - 02:00 weekends</li><li>09:30 - 02:00 festive</li></ul>')
            .appendDiv(parent)
    }

    heading(parent);
    centralBody(parent);
    lowerBody(parent);
}

