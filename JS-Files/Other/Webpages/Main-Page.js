const About_Cycle_Text = document.getElementById("About_Cycle_Text");
const Title_Cycle_Text = document.getElementById("Title_Cycle_Text");
const Landing_Logo = document.getElementById("Landing_Logo");

function Set_Text_Cycle_Object(Object, Table, Move_Effect) {
    if (!Object) return;

    var Current = 0;

    function Get_Cycle() {
        var Choice = Current + 1;

        if (Choice > Table.length - 2) {
            Current = 0;
        } else {
            Current = Choice;
        };
        return Table[Current];
    };

    var Gotten_New = Get_Cycle();
    Object.innerText = Gotten_New;

    function New() {
        setTimeout(function() {
            Gotten_New = Get_Cycle();
            Object.style["opacity"] = "0";
            if (Move_Effect) Object.style["margin-left"] = "2vw";
            setTimeout(function() {
                Object.innerText = Gotten_New;
                Object.style["opacity"] = "1";
                if (Move_Effect) Object.style["margin-left"] = "0vw";
                New();
            }, 700);
        }, 10000);
    };

    New();
};

Set_Text_Cycle_Object(About_Cycle_Text, ["Thanks for checking me out!", "Here is some info about me.", "I have some little games on my site!"], false);
Set_Text_Cycle_Object(Title_Cycle_Text, ["$Programming$ * 1", "I like programming", "Java.... Script?", "Welcome!", "[Epic programmer sounds]", "HtMl¿"], true);