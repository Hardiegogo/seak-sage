import styles from './index.module.scss';
import { Hero, Navbar } from '@seek-sage/ui';
export function Index() {
  return (
    <div>
      <Navbar />
      <main className='w-5/6 mx-auto'>
        <Hero/>
      </main>
    </div>
  );
}

export default Index;
