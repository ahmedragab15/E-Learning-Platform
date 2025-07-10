import { Button } from "@/components/ui/button";
import { allCourses, VAT_RATE } from "@/dummyData";
import CartItem from "./CartItem";
import Link from "next/link";
import { Courses } from "@/components";
import { ChevronNavigation } from "@/components/shared/ArrowNavigation";
import { Container, Heading } from "@/components/index";

const page = () => {
  const TotalAmount = () => allCourses.reduce((total, course) => total + +course.price, 0);
  const VatAmount = () => VAT_RATE * TotalAmount();

  return (
    <>
      <Container>
        <h1 className="text-2xl font-bold sm:text-4xl text-center">Shopping Cart</h1>
        <div className="flex flex-col items-center lg:flex-row justify-evenly gap-12">
            
          <div className="flex-1 lg:flex-2/3">
            <h3 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">{allCourses.length} Courses in Cart</h3>
            <ul className="space-y-4">
              {allCourses.map((course) => (
                <CartItem key={course.id} course={course} />
              ))}
            </ul>
          </div>

          <div className="flex-1 lg:flex-1/3">
            <h3 className="text-2xl font-semibold text-gray-900 pb-2">Order Details</h3>
            <div className="space-y-8 max-w-full min-w-64 sm:min-w-md bg-white p-4 shadow-md hover:shadow-lg duration-200 rounded-lg">
              <dl className="space-y-4 text-lg text-gray-700 ">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>${TotalAmount().toFixed(2)}</dd>
                </div>

                <div className="flex justify-between">
                  <dt>VAT</dt>
                  <dd>${VatAmount().toFixed(2)}</dd>
                </div>

                <div className="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>${(VatAmount() + TotalAmount()).toFixed(2)}</dd>
                </div>
              </dl>

              <div className="flex justify-end">
                <Button>
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container background="bg-white">
        <Courses
          courses={allCourses}
          heading={
            <Heading
              title="You might also like
"
            />
          }
          navigation={<ChevronNavigation />}
        />
      </Container>
    </>
  );
};

export default page;
