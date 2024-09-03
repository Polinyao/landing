const initModalPrice = () => {
    const modalPrice = document.querySelector('[data-js=modal-price]')
    const triggers = document.querySelectorAll('[data-js=trigger-modal-price]')

    if (!modalPrice) return

    const close = modalPrice.querySelector('.modal-close')

    close.addEventListener('click', () => {
        modalPrice.classList.remove('active')  
    })

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modalPrice.classList.add('active')
        })
    })

}

document.addEventListener('DOMContentLoaded', initModalPrice)
