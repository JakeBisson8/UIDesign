var services = [
    {
        id: "0",
        subtotal: 129.99,
        hst: 16.90,
        total: 146.89
    },
    {
        id: "1",
        subtotal: 29.99,
        hst: 3.90,
        total: 33.89
    },
    {
        id: "2",
        subtotal: 49.99,
        hst: 6.50,
        total: 56.49
    }
];

var professionals = [
    {
        id: "0",
        unavailableDates: [0]
    },
    {
        id: "1",
        unavailableDates: [0,1]
    },
    {
        id: "2",
        unavailableDates: [0,1,2]
    },
    {
        id: "3",
        unavailableDates: [0,1,2,3]
    },
    {
        id: "4",
        unavailableDates: [0,1,2,3,4]
    },
    {
        id: "5",
        unavailableDates: [0,1,2,3,4,5]
    },
];

var unavailableDates = []
var professionalUnavailableDates = [];
const setDateFormat = "mm/dd/yy";

function setUnavailableDates () {
    //retrieve ID of the professional that was chosen
    let professionalID = document.getElementById("professional").value;
    if (professionalID != ""){
        let professional = professionals[professionalID];
        professionalUnavailableDates = professional.unavailableDates;
    } 
}

function disableDates(date) {
    setUnavailableDates();
    //disable days the professional is said to be unavailable
    for (let i=0; i<professionalUnavailableDates.length; i++){
        if (date.getDay() == professionalUnavailableDates[i])
            return [false];
    }
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}

function updateCost(){
    let serviceID = document.getElementById("service").value;
    let service = services[serviceID];
    let subtotal = document.getElementById("subtotal");
    let hst = document.getElementById("HST");
    let total = document.getElementById("total");
    subtotal.innerHTML = "Subtotal: $" + service.subtotal.toFixed(2);
    hst.innerHTML = "HST: $" + service.hst.toFixed(2);
    total.innerHTML = "<strong>Total: $" + service.total.toFixed(2) + "</strong>";
}



$(document).ready(function(){

    //Enable Bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    //date picker for service modal
    $("#dateInput").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        } 
    );
});