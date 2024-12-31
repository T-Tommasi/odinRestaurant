import CreateNewDiv from "./divCreator";

export function MenuPage(parent) {
    function heading(parent) {
        let heading = new CreateNewDiv()
            .addClass('heading')
            .addClass('flex')
            .addContent('<h1>Our menu is widely known!</h1>')
            .appendDiv(parent)
            let firstMenuItems = new CreateNewDiv()
                .addClass('menuItem')
                .addClass('flex')
                .addContent('<ul><li>Pasta</li><li>Pasta with pasta!</li><li>This would do better with images but i cant be arsed</li>')
                .appendDiv(parent)
            let seconds =  new  CreateNewDiv()
                .addClass('menuItem')
                .addClass('flex')
                .addContent('<ul><li>Pesce whith pasta</li><li>pasta whith pesce</li><li>something else</li></ul>')
                .appendDiv(parent)
    }

    console.log('invoked the menu!')
    heading(parent)
}