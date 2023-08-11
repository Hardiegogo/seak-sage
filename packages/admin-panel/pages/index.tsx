import CoursesGrid from '../components/courses/CoursesGrid';
import RequireAuth from '../components/RequireAuth';
import { Sidebar } from '@seek-sage/ui';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { coursesFiltersState } from '../state/atoms/coursesFiltersState';

export function Index() {
  const [filters,setCoursesFilter]=useRecoilState(coursesFiltersState)
  return (
    <RequireAuth>
      <main className="flex h-full bg-bgColor p-0">
        <Sidebar setFilter={setCoursesFilter} filters={filters} publishedOptions={true}/>
        <CoursesGrid />
      </main>
    </RequireAuth>
  );
}

export default Index;
