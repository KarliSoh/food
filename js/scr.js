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







// API 

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'Alex'
//     }),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json));


// window.addEventListener('DOMContentLoaded', () => {
//     // Tabs


//     const tabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             // item.style.display = 'none';
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         // tabsContent[i].style.display = 'block';
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });


//     //Timer

//     const dedline = '2023-08-15';

//     function getTimerRemaining(endtime) {
//         // let days, hours, minutes, seconds;
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//             minutes = Math.floor((t / 1000 / 60) % 60),
//             seconds = Math.floor((t / 1000) % 60);

//         // if (t <= 0) {
//         //     days = 0;
//         //     hours = 0;
//         //     minutes = 0;
//         //     seconds = 0;
//         // } else {
//         //     days = Math.floor(t / (1000 * 60 * 60 * 24)),
//         //         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//         //         minutes = Math.floor((t / 1000 / 60) % 60),
//         //         seconds = Math.floor((t / 1000) % 60);
//         // }


//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function getZero(num) {
//         if (num >= 0 && num < 10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#days'),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timeInterval = setInterval(upDateClock, 1000);

//         upDateClock();

//         function upDateClock() {
//             const t = getTimerRemaining(endtime);

//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }

//     }

//     setClock('.timer', dedline);

//     //Modal

//     const modalTriger = document.querySelectorAll('[data-modal]'),
//         modal = document.querySelector('.modal');

//     function openModal() {
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         // modal.classList.toggle('show'); // 2-й способ
//         document.body.style.overflow = 'hidden';
//         clearInterval(modalTimerId); // если пользов. сам откр мод окно, то не будет больше откр
//     }

//     modalTriger.forEach(btn => {
//         btn.addEventListener('click', openModal);
//     });



//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show');
//         // modal.classList.toggle('show'); // 2-й способ
//         document.body.style.overflow = '';
//     }

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') == '') {
//             closeModal();
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code === "Escape" && modal.classList.contains('show')) {
//             closeModal();
//         }
//     }); // закр модальное окно при помощи клавиш

//     const modalTimerId = setTimeout(openModal, 50000);

//     function showModalByScroll() {
//         if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
//             openModal();
//             window.removeEventListener('scroll', showModalByScroll); // удаляем после прокрутки и показа мод окна
//         }
//     }

//     window.addEventListener('scroll', showModalByScroll);

//     // Используем классы для карточек
//     class MenuCard {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.classes = classes;
//             this.parent = document.querySelector(parentSelector); // будем доб элемен
//             this.transfer = 27;
//             this.changeToUAH();
//         }

//         changeToUAH() {
//             this.price = this.price * this.transfer;
//         }

//         render() {
//             const element = document.createElement('div');
//             if (this.classes.length === 0) { //если не прописали дефолтный класс
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }

//             element.innerHTML = `
//                     <img src=${this.src} alt=${this.alt}>
//                     <h3 class="menu__item-subtitle">${this.title}</h3>
//                     <div class="menu__item-descr">${this.descr}</div>
//                     <div class="menu__item-divider"></div>
//                     <div class="menu__item-price">
//                         <div class="menu__item-cost">Цена:</div>
//                         <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                     </div>
//             `;
//             this.parent.append(element);
//         }
//     }

//     new MenuCard(
//         "img/tabs/vegy.jpg",
//         "vegy",
//         'Меню "Фитнес"',
//         'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//         9,
//         ".menu .container",
//         'menu__item',
//         'big'
//     ).render();
//     new MenuCard(
//         "img/tabs/post.jpg",
//         "post",
//         'Меню "Постное"',
//         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//         14,
//         ".menu .container",
//         'menu__item'
//     ).render();
//     new MenuCard(
//         "img/tabs/elite.jpg",
//         "elite",
//         'Меню “Премиум”',
//         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//         21,
//         ".menu .container",
//         'menu__item'
//     ).render();

//     // Forms

//     const forms = document.querySelectorAll('form');

//     const message = {
//         loading: 'img/form/spinner.svg',
//         success: 'Спасибо! Скоро мы с вами свяжемся',
//         failure: 'Что-то пошло не так...'
//     };

//     forms.forEach(item => {
//         postData(item);
//     });

//     function postData(form) {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();

//             const statusMessage = document.createElement('img');
//             statusMessage.src = message.loading;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             form.insertAdjacentElement('afterend', statusMessage);




//             const formData = new FormData(form);

//             // делаем с пом json
//             // const object = {};
//             // formData.forEach(function (value, key) {
//             //     object[key] = value;
//             // });

//             // const json = JSON.stringify(object);

//             fetch('server.php', {
//                 method: "POST",
//                 // headers: {
//                 //     'Content-type': 'application/json'
//                 // },
//                 body: formData
//             }).then(data => {
//                 console.log(data);
//                 showThanksModal(message.success);
//                 statusMessage.remove();
//             }).catch(() => {
//                 showThanksModal(message.failure);
//             }).finally(() => {
//                 form.reset();
//             })

//             // request.addEventListener('load', () => {
//             //     if (request.status === 200) {
//             //         console.log(request.response);
//             //         showThanksModal(message.success);
//             //         form.reset();
//             //         statusMessage.remove();
//             //     } else {
//             //         showThanksModal(message.failure);
//             //     }
//             // });
//         });
//     }

//     function showThanksModal(message) {
//         const prevModalDialog = document.querySelector('.modal__dialog');

//         prevModalDialog.classList.add('hide');
//         openModal();

//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div class="modal__close" data-close>×</div>
//                 <div class="modal__title">${message}</div>
//             </div>
//         `;
//         document.querySelector('.modal').append(thanksModal);
//         setTimeout(() => {
//             thanksModal.remove();
//             prevModalDialog.classList.add('show');
//             prevModalDialog.classList.remove('hide');
//             closeModal();
//         }, 4000);
//     }
// });