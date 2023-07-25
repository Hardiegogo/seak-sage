import React from 'react';
import Sidebar from '../../components/Sidebar';
import RequireAuth from '../../components/RequireAuth';
import CourseForm from '../../components/courses/CourseForm';

function NewCourse() {
  return (
    <RequireAuth>
      <main className="flex text-textColor justify-center">
        <div className="p-8">
          <h2 className="text-xl">Create a new course</h2>
          <CourseForm />
        </div>
      </main>
    </RequireAuth>
  );
}

export default NewCourse;
