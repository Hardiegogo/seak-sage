import Link from 'next/link';
import ProtectedLayout from './ProtectedLayout';
import logo from '../assets/seekSage-1.png';
import Image from 'next/image';

export function Index() {
  return (
    <ProtectedLayout>
      <>
        Homepage
      </>
    </ProtectedLayout>
  );
}

export default Index;
