function addTodo(){
    //todo-list 영역에
    {/* <li>
        냠냠
        <div class="todo-remove-btn">
            <i class="fa-solid fa-xmark"></i>
        </div>          
    </li> */}

    const searchInput = document.querySelector("#search-bar input")

    const todoLi = document.createElement('li') //<li></li>
    todoLi.innerText = searchInput.value; //<li></li>
    

    const removeBtn = document.createElement('div');
    removeBtn.className = 'todo-remove-btn';
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todoLi.appendChild(removeBtn);

    removeBtn.onclick = function(){
        $(this.parentNode).remove();
    }

    const todoUl = document.querySelector(".todo-list");
    todoUl.appendChild(todoLi);
    
}

function resetTodo(){
    
}