
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
    

    // Remove buttons
    const removeRowButton = document.createElement("button");
    removeRowButton.id = "removeRowButton";

    const removeColumnButton = document.createElement("button");
    removeColumnButton.id = "removeColumnButton";

    removeRowButton.className = removeColumnButton.className = "removeButton";
    removeRowButton.innerHTML = removeColumnButton.innerHTML = "-";


    function changeRemoveButtonVisiableState(visiable)
    {
        removeColumnButton.style.visibility = 
        removeRowButton.style.visibility = visiable ? "visible":"hidden";
    }


    function addSquares(lenght)
    {
        let square;
        for(let i = 0; i < lenght;i++)
        {
            square = this.document.createElement("div");
            square.className = "square";
            square.addEventListener("mouseenter",onMouseEnterSquareHandler);
            field.addEventListener("mouseleave",onMouseLeaveSquareAreaHandler);
            field.appendChild(square);
        }
    }


    // Change columts size in element 
    function changeFieldLayout()
    {
        field.setAttribute("style",
        "grid-template-columns : repeat(" + columns +",50px)");
    }


    // Handlers

    // Change position relative to focused square position
    function changeRemoveButtonPosition(index)
    {
        const moveLenght = 53;
        removeRowButton.setAttribute("style",
        "top:" + moveLenght * ((index - index % columns) / columns) + "px"
        );
        removeColumnButton.setAttribute("style",
        "left:" + moveLenght * (index % columns)  + "px" 
        );
    }


    function addColumnButtonClickHandler()
    {
        addSquares(document.getElementsByClassName("square").length / columns);
        columns++;
        changeFieldLayout();
        
    }

    function addRowButtonClickHandler()
    {
        addSquares(columns);
    }


    function onMouseEnterSquareHandler(event)
    {
        const element = event.target;
        const targetIndex =  Array.from(document.getElementsByClassName("square")).indexOf(element);
        
        changeRemoveButtonPosition(targetIndex);
        changeRemoveButtonVisiableState(true);
    }


    function onMouseLeaveSquareAreaHandler()
    {
        changeRemoveButtonVisiableState(false);
    }

   

    function onMouseEnterRemoveButtonHandler()
    {
        changeRemoveButtonVisiableState(true);
    }


    function onMouseLeaveRemoveButtonHandler()
    {
        changeRemoveButtonVisiableState(false);
    }


    function removeRowButtonClickHandler()
    {
        console.log("click");

    }


    function removeColumnButtonClickHandler()
    {

        console.log("click");
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
        removeColumnButtonContainer.appendChild(removeColumnButton);
        removeRowButtonContainer.appendChild(removeRowButton);

        addSquares(4);
        changeFieldLayout();

        addRowButton.addEventListener("click",addRowButtonClickHandler);
        addColumnButton.addEventListener("click",addColumnButtonClickHandler);
        removeRowButton.addEventListener("click",removeRowButtonClickHandler);
        removeColumnButton.addEventListener("click",removeColumnButtonClickHandler);
        removeColumnButton.addEventListener("mouseenter",onMouseEnterRemoveButtonHandler);
        removeRowButton.addEventListener("mouseenter",onMouseEnterRemoveButtonHandler);
        removeColumnButton.addEventListener("mouseleave",onMouseLeaveRemoveButtonHandler);
        removeRowButton.addEventListener("mouseleave",onMouseLeaveRemoveButtonHandler);

    });

};




window.addEventListener("load", function(event) {

    squareApp()();

});




