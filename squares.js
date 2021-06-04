
// Square app script function
const squareApp = function() {

    let columns = 2;
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
            square = this.document.createElement("div");
            square.className = "square";
            square.innerHTML = i;
            square.addEventListener("mouseenter",onMouseEnterSquareHandler);
            field.addEventListener("mouseleave",onMouseLeaveSquareAreaHandler);
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
                
                square = this.document.createElement("div");
                square.className = "square";
                square.innerHTML = 10 + i;
                square.addEventListener("mouseenter",onMouseEnterSquareHandler);
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

    function removeSquares(lenght)
    {
        const squares = document.getElementsByClassName("square");
        for(let i = 0; i < lenght;i++)
        {
            squares[i].remove();
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
        removeRowButton.setAttribute("style",
        "top:" + RM_BUTTON_STEP * ((index - index % columns) / columns) + "px"
        );
        removeColumnButton.setAttribute("style",
        "left:" + RM_BUTTON_STEP * (index % columns)  + "px" 
        );
    }


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
            removeSquares(columns);

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
        if(columns == 1)
        {
            changeRemoveButtonVisiableState();
        }
        // Delete squares and columns
        removeSquares((squares.length - (squares.length % columns))/ columns);
        columns--;
        changeFieldLayout();
        changeRemoveButtonVisiableState();

         // Make button invisiable when remove button is more far then squares 
        if(position / RM_BUTTON_STEP >= columns )
        {
            changeRemoveButtonVisiableState(false);
        }

            
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

        addRow(4);
        changeFieldLayout();

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

    squareApp()();

});




