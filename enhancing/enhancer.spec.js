const enhancer = require('./enhancer.js');
// test away!
describe('The enhancer module', () => {

  describe('The repair function', () => {
    it('Should restore durability to 100', () => {
      expect(enhancer.repair({name: 'Needle', durability: 1, enhancement: 0}))
                    .toEqual({name: 'Needle', durability: 100, enhancement: 0});
    });
  });

  describe('The success function', () => {
    it('Should increase items enhancement by 1; if enhancement is 20, it does not change', () => {
      expect(enhancer.succeed({name: 'Needle', durability: 1, enhancement: 0}))
                     .toEqual({name: 'Needle', durability: 1, enhancement: 1});

      expect(enhancer.succeed({name: 'Needle', durability: 1, enhancement: 20}))
                     .toEqual({name: 'Needle', durability: 1, enhancement: 20});
    });
  });

});
