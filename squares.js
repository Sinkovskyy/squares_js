
// Square app script function
const squareApp = function() {

    const appElement = this.document.getElementById("square-app");
    const field = this.document.createElement("div");
    field.id = "squares-field";
    let columns = 2;
   


    function addSquares(lenght)
    {
        let square;
        for(let i = 0; i < lenght;i++)
        {
            square = this.document.createElement("div");
            square.className = "square";
            field.appendChild(square);
        }
    }

    // Main function
    return (() => 
    {
        appElement.appendChild(field);
        addSquares(4);
        

    });

};




window.addEventListener("load", function(event) {

    squareApp()();

});




