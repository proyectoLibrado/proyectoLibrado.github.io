//https://script.google.com/macros/s/AKfycbwWWkPAjYLfXZ4Fo_u2wsG1dqeb4KSGYAZ41ghzGWBRYLD0pDF8lstn6a6jWZnOVCuu/exec
function reset(){
    document.getElementById('inscription').reset()
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwWWkPAjYLfXZ4Fo_u2wsG1dqeb4KSGYAZ41ghzGWBRYLD0pDF8lstn6a6jWZnOVCuu/exec'
const form = document.forms['inscription']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response), reset())
    .catch(error => console.error('Error!', error.message))
})