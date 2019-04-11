const enhancer = require('./enhancer.js');
// test away!
describe('The enhancer module', () => {

  describe('The repair function', () => {

    it('Should restore durability to 100', () => {

      expect(enhancer.repair({name: 'Needle', durability: 1, enhancement: 0}))
                    .toEqual({name: 'Needle', durability: 100, enhancement: 0});
    });
  });
});
