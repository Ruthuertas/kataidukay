import React from 'react';
import {shallow} from 'enzyme';
import Kata from '../Kata';

describe('Kata', () => {
  let component;
  let props;
  let instance;

  const render = () => {
    component = shallow(<Kata {...props} />);
    instance = component.instance();
  };
  
  beforeEach(() => {
    render();
  });
  
  describe('on instance', () => {
    it('should defined default states and props', () => {
      instance.generateArray(3, 6);
      expect(instance.state.printerArray).toEqual([
        [1, 2, 3, 4, 5,6],
        [7, 8, 9, 10, 11,12],
        [13, 14, 15, 16, 17,18]
      ]);
    });
    it('Este test deberia retornar la impresion de una matriz recorrida en forma de caracol', () => {
      instance.state.printerArray=[
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      instance.loopArrayInSnail();

      expect(instance.state.resultArray).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);

    });

    fit('Este test deberia retornar la impresion de una matriz recorrida en forma de caracol', () => {
      instance.state.printerArray=[
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18]
      ];

      instance.loopArrayInSnail();

      expect(instance.state.resultArray).toEqual([1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9,10, 11]);

    });
  });


});

