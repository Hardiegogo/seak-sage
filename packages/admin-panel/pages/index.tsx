// import CoursesGrid from '../components/courses/CoursesGrid';
// import RequireAuth from '../components/RequireAuth';
// import { Sidebar } from '@seek-sage/ui';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import { coursesFiltersState } from '../state/atoms/coursesFiltersState';

// export function Index() {
//   const [filters,setCoursesFilter]=useRecoilState(coursesFiltersState)
//   return (
//       <main className="flex h-full bg-bgColor p-0">
//         <Sidebar setFilter={setCoursesFilter} filters={filters} publishedOptions={true}/>
//         <CoursesGrid />
//       </main>
//   );
// }

// export default Index;


import { AdminHero} from '@seek-sage/ui';
export function Index() {
  return (
    <main className="w-5/6 mx-auto">
      <AdminHero />
    </main>
  );
}

export default Index;
