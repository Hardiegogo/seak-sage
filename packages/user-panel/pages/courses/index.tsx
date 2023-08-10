import { Sidebar } from '@seek-sage/ui';
import CoursesGrid from '../../components/courses/CoursesGrid';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { coursesFiltersState } from '../../state/atoms/coursesFilterState';

function Index() {
  const setCoursesFilter=useSetRecoilState(coursesFiltersState)
  return (
    <main className="flex">
      <Sidebar setFilter={setCoursesFilter}/>
      <CoursesGrid />
    </main>
  );
}

export default Index;
