const btApagar = (id) => {
    document.getElementById(id).style.display = 'none'  
}

// Janela inserir:

// document.onkeyup = ev => { // Deprecated
//     if (ev.keyCode === 192) mostraInserir();
//   }
document.onkeyup = ev => {
    if (ev.key == 'Dead' && ev.code == 'Backquote') mostraInserir();
  }
  
  const mostraInserir = () => {
    document.querySelector('.inserir').style.display = 'block';
    document.getElementById("headField").focus()
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

const btEnviar = () => {
    if (headField.value === '') {
      alert('Preencha ao menos o título')
    } else {
      escondeInserir()
    }
  }