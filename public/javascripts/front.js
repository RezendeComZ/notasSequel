const title = document.getElementById('title')
const body = document.getElementById('body')
const inserir = document.querySelector('.inserir')
const nota_id = document.getElementById('nota_id')

const btApagar = (id) => {
    document.getElementById(id).style.display = 'none'  
}

// Janela inserir:
document.onkeyup = ev => {
    if (ev.key == 'Dead' && ev.code == 'Backquote') mostraInserir('','');
  }
  
const mostraInserir = (tEdit, bEdit, isUpdate) => {
  if (isUpdate) {
    nota_id.value = isUpdate
    inserir.action = '/update'
  }
  title.value = tEdit;
  body.value = bEdit;
  inserir.style.display = 'block';
  document.getElementById("title").focus()
}
  
const escondeInserir = () => {
  document.querySelector('.inserir').style.display = 'none'
  nota_id.value = ''
  inserir.action = '/'
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
    }
  })

// Edit:
let postits = document.querySelectorAll('.postit')
postits.forEach(post => {
  post.addEventListener('click', () => {
    if (inserir.style.display == '' || inserir.style.display == 'none') {
      mostraInserir(post.children[0].innerText, post.children[1].innerText, post.id)
    }
  })
})