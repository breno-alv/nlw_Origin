const linkSocialMidia = {
  // Lista da Objetos
  github: 'breno-alv',
  //youtube: 'http://www.youtube.com',
  facebook: 'brenoa01',
  instagram: 'breno.alvesce'
  // twitter: 'http://twitter.com'
}

// Função para mudar nomes nos links das redes sociais quando clicado.
function ChangeSocialMidiaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linkSocialMidia[social]}`
    //alert(li.children[0].href)
  }
}

ChangeSocialMidiaLinks()

// Função para pegar informações do perfil de usuario na API do github
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMidia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
    })
}
getGitHubProfileInfos()
