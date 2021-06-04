
// Square app script function
const squareApp = function() {

    let columns = 4;
    const RM_BUTTON_STEP = 53; // Remove button sptep 

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


    function changeRemoveButtonVisiableState(visiable = true)
    {
        const squares = document.getElementsByClassName("square");
        removeColumnButton.style.visibility = 
        removeRowButton.style.visibility = visiable ? "visible":"hidden";

        if(visiable)
        {
            if(!(squares.length > columns))
            {
                removeRowButton.style.visibility = "hidden";
            }
    
            if(columns == 1)
            {
                
                removeColumnButton.style.visibility = "hidden";
            }
        }
       
    }


    function addRow(lenght)
    {
        let square;
        const countSquares = document.getElementsByClassName("square").length;
        for(let i = countSquares; i < lenght + countSquares;i++)
        {
            // Create new square
            square = this.document.createElement("div");
            square.className = "square";
            square.addEventListener("mouseenter",onMouseEnterSquareHandler);
            // Append new square in the field
            field.appendChild(square);
        }
    }

    function addColumn(lenght)
    {
        let square;
        const squares = Array.from(document.getElementsByClassName("square"));
        field.innerHTML = null;
        const squaresLength = squares.length;
        for(let i = 0; i < squaresLength + lenght;i++)
        {
            if((i+1) % columns == 0 && i !== 0)
            {
                
                // Create new square
                square = this.document.createElement("div");
                square.className = "square";
                square.addEventListener("mouseenter",onMouseEnterSquareHandler);

                // Check where we need to push element
                if(i+i == squaresLength + lenght)
                {
                    squares.push(square);
                }
                else
                {
                    squares.splice(i,0,square);
                }
                
            }
            field.appendChild(squares[i]);
        }
        
    }


    function removeColumn()
    {
        const squares = Array.from(document.getElementsByClassName("square"));
        const squaresLenght = squares.length;
        field.innerHTML = null;
        const buttonPosition = parseInt(removeColumnButton.style.left) / RM_BUTTON_STEP;
        for(let i = 0; i < squaresLenght;i++)
        {
            if((i + columns - buttonPosition) % columns != 0 )
            { 
                field.appendChild(squares[i]);
            }
                
        }
    }


    function removeRow()
    {
        const squares = Array.from(document.getElementsByClassName("square"));
        const squaresLenght = squares.length;
        field.innerHTML = null;
        const buttonPosition = parseInt( removeRowButton.style.top) / RM_BUTTON_STEP;
        for(let i = 0; i < squaresLenght;i++)
        {
            if( i < buttonPosition * columns || i >= (buttonPosition + 1) * columns)
                field.appendChild(squares[i]);
        }
    }


    // Change columts size in element 
    function changeFieldLayout()
    {
        field.setAttribute("style",
        "grid-template-columns : repeat(" + columns +",50px)");
    }


    // Change position relative to focused square position
    function changeRemoveButtonPosition(index)
    {
        removeRowButton.setAttribute("style",
        "top:" + RM_BUTTON_STEP * ((index - index % columns) / columns) + "px"
        );
        removeColumnButton.setAttribute("style",
        "left:" + RM_BUTTON_STEP * (index % columns)  + "px" 
        );
    }


    // Handlers


    function addColumnButtonClickHandler()
    {
        addColumn(document.getElementsByClassName("square").length / columns++);
        changeFieldLayout();
    }

    function addRowButtonClickHandler()
    {
        addRow(columns);
    }


    function onMouseEnterSquareHandler(event)
    {
        const element = event.target;
        // Create a new array of existing squares
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
        let squares = document.getElementsByClassName("square");
        const position = parseInt(removeRowButton.style.top);
        // Delete squares
        if( squares.length > columns)
            removeRow();

        changeRemoveButtonVisiableState();
        // Make button invisiable when remove button is more far then squares 
        if(position / RM_BUTTON_STEP >= squares.length / columns )
        {
            changeRemoveButtonVisiableState(false);
        }
    }


    function removeColumnButtonClickHandler()
    {

        let squares = document.getElementsByClassName("square");
        const position = parseInt(removeColumnButton.style.left);

        // If lenght of column equal 1 if true then delete button disapear
        if(columns == 1)
        {
            changeRemoveButtonVisiableState();
        }
        // Make button invisiable when remove button is more far then squares 
        else if(position / RM_BUTTON_STEP >= columns )
        {
            changeRemoveButtonVisiableState(false);
        }
        else
        {
            // Delete squares and columns
            removeColumn();
            columns--;
            changeFieldLayout();
            changeRemoveButtonVisiableState();
        }
    

            
    }


   
    // Main function
    return (() => 
    {
        // Create html markup
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

        // generate 4x4 squares
        addRow(16);
        changeFieldLayout();

        // Add listeners
        addRowButton.addEventListener("click",addRowButtonClickHandler);
        addColumnButton.addEventListener("click",addColumnButtonClickHandler);
        field.addEventListener("mouseleave",onMouseLeaveSquareAreaHandler);
        removeRowButton.addEventListener("click",removeRowButtonClickHandler);
        removeColumnButton.addEventListener("click",removeColumnButtonClickHandler);
        removeColumnButton.addEventListener("mouseenter",onMouseEnterRemoveButtonHandler);
        removeRowButton.addEventListener("mouseenter",onMouseEnterRemoveButtonHandler);
        removeColumnButton.addEventListener("mouseleave",onMouseLeaveRemoveButtonHandler);
        removeRowButton.addEventListener("mouseleave",onMouseLeaveRemoveButtonHandler);

    });

};




window.addEventListener("load", function(event) {

    // Initializate script when window loaded
    squareApp()();

});




