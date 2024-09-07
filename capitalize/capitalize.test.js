const capitalize = require('./capitalize');

test('capital first letter', () => {
  expect(capitalize('project')).toBe('Project');
});
