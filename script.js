const btn = document.getElementById('btn')
const container = document.getElementById('container')

btn.addEventListener('click', () => {
    creatNotifaction()
})

function creatNotifaction() {
    const notifac = document.createElement('div')
    notifac.classList.add('toast')

    notifac.innerHTML = ' this challenge is done'


        container.appendChild(notifac)
        setTimeout(() => {
            notifac.remove()
        }, 3000)
}