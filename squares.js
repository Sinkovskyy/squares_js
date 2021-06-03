
// Square app script function
const squareApp = function() {

    let columns = 2;

    const appElement = document.getElementById("square-app");

    const field = document.createElement("div");
    field.id = "squares-field";

    const container = document.createElement("div");
    container.className = "app-container";

    // Containers for event buttons
    const addColumnButtonContainer = document.createElement("div");
    addColumnButtonContainer.id = "addColumnButtonContainer";

    const addRowButtonContainer = document.createElement("div");
    addRowButtonContainer.id = "addRowButtonContainer";

    const removeColumnButtonContainer = document.createElement("div");
    removeColumnButtonContainer.id = "removeColumnButtonContainer";

    const removeRowButtonContainer = document.createElement("div");
    removeRowButtonContainer.id = "removeRowButtonContainer";

    // Add buttons
    const addRowButton = document.createElement("button");
    addRowButton.id = "addRowButton";

    const addColumnButton = document.createElement("button");
    addColumnButton.id = "addColumnButton";

    addRowButton.className = addColumnButton.className = "addButton";
    addRowButton.innerHTML = addColumnButton.innerHTML = "+";
    

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

    // Change columts size in element 
    function changeFieldLayout()
    {
        field.setAttribute("style",
        "grid-template-columns : repeat(" + columns +",50px)");
    }

    function addRowButtonClickHandler()
    {
        columns++;
        addSquares(document.getElementsByClassName("square").length / columns);
        changeFieldLayout();
    }

    function addColumnButtonClickHandler()
    {
        addSquares(columns);
    }

    // Main function
    return (() => 
    {
        appElement.appendChild(container);
        container.appendChild(field);
        container.appendChild(addColumnButtonContainer);
        container.appendChild(addRowButtonContainer);
        container.appendChild(removeColumnButtonContainer);
        container.appendChild(removeRowButtonContainer);
        addRowButtonContainer.appendChild(addRowButton);
        addColumnButtonContainer.appendChild(addColumnButton);
        addSquares(4);
        changeFieldLayout();

        addRowButton.addEventListener("click",addRowButtonClickHandler);
        addColumnButton.addEventListener("click",addColumnButtonClickHandler);

    });

};




window.addEventListener("load", function(event) {

    squareApp()();

});




