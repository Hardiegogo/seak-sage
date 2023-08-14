import { Sidebar } from '@seek-sage/ui';
import CoursesGrid from '../../components/courses/CoursesGrid';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { coursesFiltersState } from '../../state/atoms/coursesFilterState';

function Index() {
  const [filters, setCoursesFilter] = useRecoilState(coursesFiltersState);
  return (
    <main className="flex">
      <Sidebar
        setFilter={setCoursesFilter}
        filters={filters}
        publishedOptions={false}
      />
      <CoursesGrid />
    </main>
  );
}

export default Index;
