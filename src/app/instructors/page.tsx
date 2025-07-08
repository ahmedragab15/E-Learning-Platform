import { Container, InstructorCard,Heading } from '@/components';
import { instructors } from '@/dummyData';
import React from 'react'

const AllInstructors = () => {
  return (
    <Container>
      <Heading title="All Instructors" />
      <div className='flex gap-4'>
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.slug} instructor={instructor} />
        ))}
      </div>
    </Container>
  );
}

export default AllInstructors;