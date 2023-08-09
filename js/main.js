/* let btns = document.querySelectorAll('.btn');
        for(btn of btns) {
            btn.addEventListener('click', function() {
                let card = this.closest('.card');
                let dots = card.querySelector('.dots');
                let more = card.querySelector('.more');

                if(dots.style.display === 'none') {
                    dots.style.display = 'inline';
                    more.style.display = 'none';
                    this.textContent = 'Скрыть';
                } else {
                    dots.style.display = 'none';
                    more.style.display = 'inline';
                    this.textContent = 'Подробнее'; 
                }
            });
        } */
        'use strict';

        document.querySelectorAll('.btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
            let dots = btn.parentNode.querySelector('.dots');
            let more = btn.parentNode.querySelector('.more');
            
        
             if(dots.style.display === 'none') {
              dots.style.display = 'inline';
              more.style.display = 'none';
              btn.textContent = 'Подробнее';
            } else {
              //Иначе показать текст и скрыть точки
              dots.style.display = 'none';
              more.style.display = 'inline';
              btn.textContent = 'Скрыть';
            }
            });
        });