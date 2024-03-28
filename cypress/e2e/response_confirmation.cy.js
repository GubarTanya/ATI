describe('Cypress Test',() => {
  it ('None-existent login test',() => {
      cy.fixture('cypressTest').then(data => {
        cy.log('Переxод на страницу автозации')
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

        cy.log('Заходим в раздел "Отклики"')
        cy.get(':nth-child(5) > .menu-item__item-name')
            .click()

        cy.log('Нажимаем на кнопку, для подтверждения')
        cy.get('.infinite-loader > :nth-child(2) > .button')
          .click()

        // cy.log('Нажимаем на кнопку, для подтверждения')
        // cy.get('.status-open__buttons > :nth-child(1)')
        //   .click()
    })
  })
})
