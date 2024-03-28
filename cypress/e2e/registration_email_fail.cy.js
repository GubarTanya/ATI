describe('Cypress Test',() => {
  it ('login signup test(wrong_email)',() => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переxод на страницу регистрации')
          cy.visit(data.main_url)

          cy.get('.login-form__title > .subtitle > .subtitle__link > a')
          .click()

          cy.log('Ввод логина')
          cy.get('input[autocomplete="username"]')
              .type(data.login)

              
          cy.log('Ввод неправильного ail')
          cy.get('.form-input--email')
              .type(data.wrong_email)

          cy.log('Ввод password')
          cy.get('div[class="registration-form__label"]:nth-child(3)').find('input[autocomplete="new-password"]')
              .type(data.password)

          cy.log('Ввод password')
          cy.get('div[class="registration-form__label"]:nth-child(4)').find('input[autocomplete="new-password"]')
              .type(data.password)

              .wait(3000)
          cy.log('Клик по кнопке "Войти')
          cy.get('.form__buttons > :nth-child(4)')
              .click()
              
          cy.log('Ошибка')
          cy.get('.form-error > span')
              .should('exist')
      })
  })
})