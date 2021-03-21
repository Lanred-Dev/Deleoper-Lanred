let Title_Cycle_Text = document.getElementById("Title_Cycle_Text");

function Set_Text_Cycle_Object(Object, Table, Move_Effect) {
    if (!Object) return;

    var Current = 0;

    function Get_Cycle() {
        var Choice = Current + 1;

        if (Choice > Table.length - 1) {
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
        }, 8000);
    };

    New();
};

Set_Text_Cycle_Object(Title_Cycle_Text, ["Sorry, but thats not a page.", "We cant find " + window.location.pathname.split("/").pop(), "Well darn we searched but could not find that page."], true);