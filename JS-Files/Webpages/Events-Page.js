let No_Current_Container = document.getElementById("No_Current");
let Events_Container = document.getElementById("Events_Container");
let Events_List = document.getElementById("Events_List");
let Current_Events = [{"Name": "Prelaunch 1", "Start_Date": "3/21/2021", "End_Date": "Unknown", "Logo": "/Pictures/Icons/Launch_Logo.png"}];

function Handle_All() {
    var Is_Events = false;

    function Event(Event_Name, Start_Date, End_Date, Event_Logo) {
        var List_Item = document.createElement("li");
        List_Item.className = "List_Item"
        Events_List.appendChild(List_Item);
        var Container = document.createElement("div");
        Container.id = "Event";
        List_Item.appendChild(Container);
        var Logo = document.createElement("img");
        Container.appendChild(Logo);
        Logo.src = Event_Logo;
        Logo.className = "Logo";
        var Secondary_Item_Container = document.createElement("div");
        Container.appendChild(Secondary_Item_Container);
        Secondary_Item_Container.className = "Section_Container";
        var Name = document.createElement("h3");
        Secondary_Item_Container.appendChild(Name);
        Name.innerText = Event_Name;
        Name.className = "Event_Name";
        var Date = document.createElement("h3");
        Secondary_Item_Container.appendChild(Date);
        Date.innerText = Start_Date + " - " + End_Date;
        Date.className = "Event_Dates";
        setTimeout(function() {
            Container.style["opacity"] = "1";
        }, 500);
    };

    Current_Events.forEach(function(Value) {
        Event(Value["Name"], Value["Start_Date"], Value["End_Date"], Value["Logo"]);
        Is_Events = true;
    });

    if (Is_Events != true) {
        No_Current_Container.style["display"] = "block"
        Events_Container.style["display"] = "none";
    } else {
        No_Current_Container.style["display"] = "none"
        Events_Container.style["display"] = "block";
    }
};

Handle_All();