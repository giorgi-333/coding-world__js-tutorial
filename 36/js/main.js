




function sendContact() {

  const data = {
    name: nameInput.value,
    email: email.value,
    text: text.value
  }


  axios.post('https://coding-world.com/back/public/api/fake-contact/add', data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}