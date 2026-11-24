import React, { useState } from 'react';
import LifeCycle from './LifeCycle';

const Child = () => {
  return (
    <div>
      <div>Child</div>
      {/* LifeCycle 컴포넌트를 화면에 표시하려면 아래 주석을 해제하세요 */}
      {/* <LifeCycle /> */}
    </div>
  );
};

export default Child;