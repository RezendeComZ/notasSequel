const title = document.getElementById('title')
const body = document.getElementById('body')

const btApagar = (id) => {
    document.getElementById(id).style.display = 'none'  
}

// Janela inserir:

document.onkeyup = ev => {
    if (ev.key == 'Dead' && ev.code == 'Backquote') mostraInserir('','');
  }
  
const mostraInserir = (tEdit, bEdit, isUpdate) => {
  title.value = tEdit;
  body.value = bEdit;
  document.querySelector('.inserir').style.display = 'block';
  document.getElementById("title").focus()
}
  
const escondeInserir = () => {
  document.querySelector('.inserir').style.display = 'none'
}

const deuEnter = (event) => {
  if (event.keyCode === 13) btEnviar();
}
const deuCtrlEnter = (event) => {
  if (event.keyCode === 13 && event.ctrlKey) {
      document.forms[0].submit();;
      btEnviar();
  };
  if (event.keyCode === 13 && event.metaKey) {
      document.forms[0].submit();;
      btEnviar()
  }; /// via CMD
}

const btEnviar = document.getElementById('btEnviar')
btEnviar.addEventListener('click', (ev) => {
    if (!title.value && !body.value) {
      alert('Preencha ao menos um campo')
      ev.preventDefault();
    } else {
      escondeInserir()
    }
  })

// Edit // WIP

let postits = document.querySelectorAll('.postit')
postits.forEach(post => {
  post.addEventListener('click', () => {
    mostraInserir(post.children[1].innerText, post.children[2].innerText)
  })
})