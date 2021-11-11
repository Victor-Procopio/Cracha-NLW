// Caso queira alterar os dados basta alterar a const (linksSocialMedia)
const linksSocialMedia = {
  youtube: 'channel/UCdrKvhq4gwIAcdPP0dWB3hQ',
  facebook: 'victorprocopioa',
  instagram: 'victorprocopioa',
  github: 'victorprocopioa'
}

function changeSocialMediaLinks() {
  // está buscando a ul pelo id socialLinks e buscando os filhos (lis) pelo .children
  for (let li of socialLinks.children) {
    // está buscando o atributo da li, no caso a class
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// usando novamente o template string. Antes de qualquer coisa não podemos esquecer de colocar as CRASES!
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  // Eestá buscando na URL
  fetch(url)
    // Então se deucerto, faça...
    .then(response => response.json())
    // o fetch não sabe que aquilo é um json
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
