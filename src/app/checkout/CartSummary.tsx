import React from 'react'
import CartItem from '../cart/CartItem';
import { allCourses } from '@/dummyData';

const CartSummary = () => {
  return (
    <div
      className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {allCourses.map((course) => (
            <CartItem key={course.id} course={course} />
          ))}
        </ul>

        <div className="space-y-4 text-center">
          <a href="#" className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400">
            View my cart (2)
          </a>

          <a href="#" className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
            Checkout
          </a>

          <a href="#" className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600">
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default CartSummary