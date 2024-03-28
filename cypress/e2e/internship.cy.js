describe('Cypress Test',() => {
  it ('None-existent login test',() => {
      cy.fixture('cypressTest').then(data => {
        cy.log('Переxод на страницу автозации')
        cy.viewport(1400, 900)
        cy.visit(data.main_url)

        cy.log('Ввод несуществующего логина')
        cy.get('input[class="form-input--text form-input"]')
            .type(data.login_employer)

        cy.log('Ввод существующего пароля')
        cy.get('input[class="form-input--password form-input"]')
            .type(data.password)

        cy.log('Клик по кнопке "Войти')
        cy.get('div[class="login-form__button"] button[type="submit"]')
            .click()
        cy.wait(1500)

        cy.log('Заходим в раздел "Стажировка"')
        cy.get(':nth-child(8) > .menu-item__item-name')
          .click()

        cy.log('Заходим в создание Стажировки')
        cy.get('[data-v-b4b9d629=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
          .click()

        cy.log('Вводим название Стажировки')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
          .type(data.job_name)

        cy.log('Выбираем вид работы')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .form-select > :nth-child(2) > .form-select__selected')
          .click()
        cy.get('.form-select__items > :nth-child(3)')  
          .click() 
        
        cy.log('Выбираем оплату')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected')    
          .click()
        cy.get('.form-select__items > :nth-child(1)')
          .click()

        cy.log('Дата начала')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control--responsive > .form-input--date')
          .type(data.start_date) 
        cy.log('Дата окончания')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control--responsive > .form-input--date')
          .type(data.end_date) 
        
        cy.log('Прописываем требования')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
          .type(data.requirements)

        cy.log('Прописываем обязанности')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(7) > .form-control > .form-area')
          .type(data.responsibilities)

        cy.log('Создаем стажировку')
        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
          .click()

        cy.get(':nth-child(1) > .internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green')
          .click()
    })
  })
})
