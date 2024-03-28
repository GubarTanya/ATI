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

        cy.log('Заходим в раздел "Вакансии"')
        cy.get(':nth-child(7) > .menu-item__item-name')          
          .click()

        cy.log('Кликаем на создание вакансии')
        cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
          .click()

        cy.log('Прописываем должность')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
          .type(data.job_name)

        cy.log('Прописываем зарплату')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(3) > .radio-component__input')
          .click()
        cy.get('.form-input--number')
          .type(data.zp)

        cy.log('Прописываем тип работы')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected')
          .click()
        cy.get('.form-select__items > :nth-child(3)')
          .click()

        cy.log('Прописываем график работы')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-090bd50f=""] > :nth-child(1) > .radio-list > :nth-child(2) > .radio-component__input')
          .click()

        cy.log('Прописываем требования')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
          .type(data.requirements)

        cy.log('Прописываем обязанности')
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
          .type(data.responsibilities)

        cy.log('Кликаем на кнопку создания вакансии')
        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
          .click()

        cy.log('Опубликовываем вакансию')
        cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green')
          .click()
    })
  })
})
