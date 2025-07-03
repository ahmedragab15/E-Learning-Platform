import { MoveLeft, MoveRight } from 'lucide-react';
import React from 'react'

const ArrowNavigation = () => {
  return (
    <>
      <div className="flex gap-4 justify-center">
        <MoveLeft />
        <MoveRight />
      </div>
    </>
  );
}

export default ArrowNavigation