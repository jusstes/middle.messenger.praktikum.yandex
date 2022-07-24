const chatForm = document.querySelector('.js-form')

const handleSubmit = (evt) => evt.preventDefault()

chatForm?.addEventListener('submit', handleSubmit)

const chatContent = document.querySelector('.app-section__content')

function scrollToBottom() {
  chatContent.scrollTo(0, chatContent.scrollHeight)
}

if (chatContent) window.onload = scrollToBottom
