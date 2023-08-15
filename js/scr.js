// function showThanksModal(message) {
//     const prevModalDilog = document.querySelector('.modal__dialog');
//     // скрываем элем в модальном окне
//     prevModalDilog.classList.add('hide');
//     openModal();

//     // создаем новый контент
//     const thanksModal = document.createElement('div');
//     thanksModal.classList.add('.modal__dialog');
//     thanksModal.innerHTML = `
//          <div class="modal__content">
//              <div class="modal__close" data-close>×</div>
//              <div class="modal__title">${message}</div>
//          </div>
//     `;

//     // получ мод окно
//     document.querySelector('.modal').append(thanksModal);
//     setTimeout(() => {
//         // thanksModal удаляем через 4 сек
//         thanksModal.remove();
//         // показываем предыд контент show и удаляем hide
//         prevModalDilog.classList.add('show');
//         prevModalDilog.classList.remove('hide');
//         // закр мод окно
//         closeModal();
//     }, 4000);
// }