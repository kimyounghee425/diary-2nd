
context('일기장 앱의 기본 테스트', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5050')
  })

  it('타이틀 유효성 테스트', () => {
    cy.title().should('eq', '나의 일기장')
  })

  it('월 변경 작동 확인', () => {
    cy.get('.titlebar').invoke('text').then(initialContent => {
      cy.get('[data-test=prev]').click();
      cy.get('.titlebar').should('not.have.text', initialContent);
    });
  })


})