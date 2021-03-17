const Events_Container = document.getElementById("Events");
const Current = ["Size test. All content is not finished. You will see things that are unfinished."];

function Handle_All() {
    function Annoucment(Annoucment_Status, My_Number) {
        if (!Annoucment_Status) return;

        var Container = document.createElement("div");
        Container.id = "Annoucment";
        Events_Container.appendChild(Container);
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
                Container.style["height"] = "1vh";
                Container.style["margin-top"] = "5vh";
                setTimeout(function() {
                    Container.style["width"] = "20vw";
                    Container.style["margin-left"] = "40vw";
                    Container.style["opacity"] = "0";
                    setTimeout(function() {
                        Container.remove();
                        Annoucment(Current[My_Number + 1], My_Number + 1);
                    }, 500);
                }, 500);
            }, 750);
        }, 10000);
    };

    Annoucment(Current[0], 0);
};

Handle_All();