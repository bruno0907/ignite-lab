import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Mock content test suitcase');

    expect(content).toBeTruthy;
    expect(content.value).toBe('Mock content test suitcase');
  });

  it('should not be able to create a content with less than  5 characters', () => {
    expect(() => new Content('Mock')).toThrow();
  });

  it('should not be able to create a content with more than  240 characters', () => {
    expect(() => new Content('Mock'.repeat(240))).toThrow();
  });
});
