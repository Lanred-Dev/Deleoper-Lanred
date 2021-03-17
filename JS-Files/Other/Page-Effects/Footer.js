const Page_Footer = document.getElementById("Page_Footer");
const Themes = ["linear-gradient(120deg, #BA0065, #BA0026)", "linear-gradient(120deg, #421a30, #3b1e24)", "linear-gradient(120deg, #0084ff, #00ff88)"];

function Handle_Theme_Changer() {
    var Current = 0;

    function Change() {
        if (Current > Themes.length - 2) {
            Current = 0;
        } else {
            Current += 1;
        };
        //const Background_Type_1_Elements = document.querySelectorAll("#Theme_Background_1");
        //for (var Current_Element = 0; Current_Element < Background_Type_1_Elements.length; Current_Element++) {
            //Background_Type_1_Elements[Current_Element].style["background-image"] = Themes[Current];
        //};
        document.body.style["background-image"] = Themes[Current];
    };

    Theme.onclick = Change;
};

Handle_Theme_Changer();