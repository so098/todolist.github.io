    //버튼 클릭하면! 인풋에 작성 후!  인풋에 작성한 글!이 li에 추가 !
    //버튼 클릭시 인풋에 있는 글이 삭제됨, 인풋에 포커스 됨
    //li 안에 있는 del 클릭시 삭제
    const ulArea = document.querySelector('.ul___area');
    const todoUl = document.createElement('ul');
    ulArea.appendChild(todoUl);
    const submit = document.querySelector('.submit');
    const submitBtn = document.querySelector('.submitBtn');
    submitBtn.addEventListener('click',()=>{
        console.log('버튼클릭');

        pushLi();
    });

    let id = 0;
    function pushLi(){

        let submitVal = submit.value;
        if(submitVal === ''){//비교할때 ===이거 세개 꼭 쓰기
            return;
        }
        const todoLi = document.createElement('li');
        todoLi.setAttribute('class','list');
        todoLi.setAttribute('data-id',id);
        todoUl.appendChild(todoLi);
        todoLi.innerHTML = `
        ${submitVal}<span class="material-icons" data-id=${id}>radio_button_unchecked</span>
        `
        
        submit.focus();
        submit.value = '';
        todoLi.scrollIntoView();
        id++;
        return todoLi;
    }
    //엔터치면 나가는거..
    submit.addEventListener('keyup',(event)=>{
        if(event.keyCode === 13){
            pushLi();
        }

    });
    let actionStart = true;
    todoUl.addEventListener('click',clickId);

    function clickId(event){
        const id = event.target.dataset.id;
        if(id){
            const toBeDeleted = document.querySelector(`.list[data-id="${id}"]`);
            const materialIcon = document.querySelector(`.material-icons[data-id="${id}"]`);
            materialIcon.innerHTML ='remove_circle_outline';
            toBeDeleted.classList.add('txtDeco')
        }
    }
    
    
  