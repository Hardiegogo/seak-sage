import CoursesGrid from '../components/courses/CoursesGrid';
import RequireAuth from '../components/RequireAuth';
import { Sidebar } from '@seek-sage/ui';
import { useSetRecoilState } from 'recoil';
import { coursesFiltersState } from '../state/atoms/coursesFiltersState';

export function Index() {
  const setCoursesFilter=useSetRecoilState(coursesFiltersState)
  return (
    <RequireAuth>
      <main className="flex h-full bg-bgColor p-0">
        <Sidebar setFilter={setCoursesFilter} />
        <CoursesGrid />
      </main>
    </RequireAuth>
  );
}

export default Index;
