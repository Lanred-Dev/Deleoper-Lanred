let Page_Footer = document.getElementById("Page_Footer");
let Themes = ["linear-gradient(120deg, #BA0065, #BA0026)", "linear-gradient(120deg, #421a30, #3b1e24)", "linear-gradient(120deg, #0084ff, #00ff88)", "linear-gradient(120deg, #00509b, #007c42)"];
let Current = 0;

function Get_Theme_Cookie() {
    var Name = "Theme=";
    var Decoded_Cookie = decodeURIComponent(document.cookie);
    var Split_Decoded = Decoded_Cookie.split(";");
    for (var Current_Cookie = 0; Current_Cookie < Split_Decoded.length; Current_Cookie++) {
        var Cookie = Split_Decoded[Current_Cookie];
        while (Cookie.charAt(0) == " ") {
            Cookie = Cookie.substring(1);
        };
        if (Cookie.indexOf(Name) == 0) {
            return Cookie.substring(Name.length, Cookie.length);
        };
    }
    return "";
};

function Load_Theme() {
    var Theme = Get_Theme_Cookie();

    if (!Theme) {
        document.cookie = "Theme=0; expires=Mon, 1 Jan 3030 12:00:00 UTC; path=/";
    } else {
        Current = parseInt(Theme);
        document.body.style["background-image"] = Themes[Theme];
    }
}

function Handle_Theme_Changer() {
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
        document.cookie = "Theme=" + Current + "; expires=Mon, 1 Jan 3030 12:00:00 UTC; path=/";
        document.body.style["background-image"] = Themes[Current];
    };

    Theme.onclick = Change;
};

Load_Theme();
Handle_Theme_Changer();