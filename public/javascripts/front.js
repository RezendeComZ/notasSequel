const title = document.getElementById('title')
const body = document.getElementById('body')

const btApagar = (id) => {
    document.getElementById(id).style.display = 'none'  
}

// Janela inserir:

document.onkeyup = ev => {
    if (ev.key == 'Dead' && ev.code == 'Backquote') mostraInserir();
  }
  
const mostraInserir = () => {
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