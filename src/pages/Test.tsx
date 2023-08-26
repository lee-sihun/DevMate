import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import styled from 'styled-components';

import {
  decrement,
  increment,
  incrementByAmount,
}
  from '../store/slices/counterSlice';
const Test = () => {
  return (
    <React.Fragment>
      <Counter />
    </React.Fragment>
  );
};

export default Test;

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const icrNum = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <h1>Counter</h1>
      <RowWrap>
        <Minus onClick={() => dispatch(decrement())}>-</Minus>
        <Count>{count}</Count>
        <Plus onClick={() => dispatch(increment())}>+</Plus>
        <input ref={icrNum} type="number" />
        <button onClick={
          () => dispatch(incrementByAmount(Number(icrNum.current?.value)))
        }>
          더하기
        </button>
      </RowWrap>
    </div>
  );
};

const RowWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Count = styled.div`
  width:100px;
  height:100px;
  border-radius:10px;
  background-color:cornflowerblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  color: white;
`;

const Plus = styled.div`
  font-size: 50px;
  cursor: pointer;
`;
const Minus = styled.div`
  font-size: 50px;
  cursor: pointer;
`;