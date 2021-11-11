import { beforeEach, cy, describe, it } from 'local-cypress';

describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should display correct heading', () => {
    cy.get('h1').should('contain', 'Theodorus Clarence');
  });
});
