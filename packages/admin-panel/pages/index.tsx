import Link from 'next/link';
import ProtectedLayout from './ProtectedLayout';
import logo from '../assets/seekSage-1.png';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import CoursesGrid from '../components/courses/CoursesGrid';
import RequireAuth from '../components/RequireAuth';

export function Index() {
  return (
    <RequireAuth>
      <main className="flex h-full">
        <Sidebar />
        <CoursesGrid />
      </main>
    </RequireAuth>
  );
}

export default Index;
