describe('Cypress Test',() => {
  it ('None-existent login test',() => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переxод на страницу регистрации')
          cy.visit(data.main_url)

          cy.get('.login-form__title > .subtitle > .subtitle__link > a')
            .click()

          cy.log('Ввод логина')
          cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
            .type(data.login)

          cy.log('Ввод email')
          cy.get('input[class="form-input--email form-input"]')
            .type(data.email)

          cy.log('Ввод пароля')
          cy.get('div[class="registration-form__label"]:nth-child(3)').find('input[autocomplete="new-password"]')
            .type(data.password)

          cy.log('Ввод пароля')
          cy.get('div[class="registration-form__label"]:nth-child(4)').find('input[autocomplete="new-password"]')
            .type(data.not_password)

          cy.log('Клик по кнопке "Войти')
          cy.get('.form__buttons > :nth-child(4)') 
             .click()
      })
  })
})

