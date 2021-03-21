let Annoucments_Container = document.getElementById("Annoucments");
let Current_Annoucments = ["Welcome to the websites Launch Test 1! This is like a prelaunch, which means content is not finished."];

function Handle_All() {
    function Annoucment(Annoucment_Status, My_Number) {
        if (!Annoucment_Status) return;

        var Container = document.createElement("div");
        Container.id = "Annoucment";
        Annoucments_Container.appendChild(Container);
        var Status = document.createElement("h3");
        Container.appendChild(Status);
        Status.innerText = Annoucment_Status;
        Status.id = "Status";
        setTimeout(function() {
            Container.style["opacity"] = "1";
        }, 500);

        setTimeout(function() {
            Status.style["margin-top"] = "5vh";
            setTimeout(function() {
                Container.style["height"] = "9.39px";
                Container.style["margin-top"] = "5.9vh";
                setTimeout(function() {
                    Container.style["width"] = "375.8px";
                    Container.style["margin-left"] = "40vw";
                    Container.style["opacity"] = "0";
                    setTimeout(function() {
                        Container.remove();
                        Annoucment(Current_Annoucments[My_Number + 1], My_Number + 1);
                    }, 500);
                }, 500);
            }, 750);
        }, 10000);
    };

    Annoucment(Current_Annoucments[0], 0);
};

Handle_All();