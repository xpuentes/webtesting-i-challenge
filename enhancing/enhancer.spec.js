const enhancer = require('./enhancer.js');
const { repair, succeed, fail } = enhancer;
// test away!
describe('The enhancer module', () => {

  describe('The repair function', () => {
    it('Should restore durability to 100', () => {
      expect(repair({name: 'Needle', durability: 1, enhancement: 0}))
           .toEqual({name: 'Needle', durability: 100, enhancement: 0});
    });
  });

  describe('The success function', () => {
    it('Should increase items enhancement by 1', () => {
      expect(succeed({name: 'Needle', durability: 1, enhancement: 0}))
            .toEqual({name: 'Needle', durability: 1, enhancement: 1});
    });
    it('Should not change enhancment is 20', () => {
      expect(succeed({name: 'Needle', durability: 1, enhancement: 20}))
            .toEqual({name: 'Needle', durability: 1, enhancement: 20});
    });
  });

  describe('The fail function', () => {
    it('Should decrease durability by 5, if enhancement is less than 15', () => {
      expect(fail({name: 'Needle', durability: 6, enhancement: 14}))
         .toEqual({name: 'Needle', durability: 1, enhancement: 14});
    });
    it('Should decrease durability by 10, if enhancement is 15 or greater', () => {
      expect(fail({name: 'Needle', durability: 11, enhancement: 15}))
         .toEqual({name: 'Needle', durability: 1, enhancement: 15});
    });
    it('Should decrease enhancement by 1, if enhancement is 16 or greater', () => {
      expect(fail({name: 'Needle', durability: 11, enhancement: 17}))
         .toEqual({name: 'Needle', durability: 1, enhancement: 16});
    });
  });
});
