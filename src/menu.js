import CreateNewDiv from "./divCreator";

export function menuPage(parent) {
    function heading(parent) {
        let heading = new CreateNewDiv()
            .addClass('heading')
            .addClass('flex')
            .addContent('<h1>Our menu is widely known!</h1>')
            .appendDiv(parent)
            let firstMenuItems = new CreateNewDiv()
                .addClass('firsts')
                .addClass('flex')
                .addContent('<ul><li>Pasta</li><li>Pasta with pasta!</li><li>This would do better with images but i cant be arsed</li>')
                .appendDiv(heading)
    }
}