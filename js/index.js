const btnAdd = document.querySelector('#add');
const btnDelete = document.querySelector('#delete');
const container = document.querySelector('.container');
const titulo = document.querySelector('#titulo');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    SavePerson();
});

const AddPerson = () =>{
    const newInputName = document.createElement('input');
    const newInputPhone = document.createElement('input');

    newInputName.setAttribute('placeholder', 'Name');
    newInputPhone.setAttribute('placeholder', 'Phone');
    container.append(newInputName,newInputPhone);
}

const DeletePerson = () =>{
    const inputsNodeList = document.querySelectorAll('input');
    const inputsArr = [...inputsNodeList];

    let ultimaPersona = {
        name: inputsArr[inputsArr.length-1],
        pass: inputsArr[inputsArr.length-2]
    }

    container.removeChild(ultimaPersona.name);
    container.removeChild(ultimaPersona.pass);
}

const SavePerson = () =>{
    alert('Person Saved');
}

btnAdd.addEventListener('click', AddPerson);
btnDelete.addEventListener('click', DeletePerson);