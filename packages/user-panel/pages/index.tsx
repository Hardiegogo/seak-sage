import {  Hero} from '@seek-sage/ui';
import axios from 'axios';
import { useEffect } from 'react';
export function Index() {
  useEffect(()=>{
    (async()=>{
      const res = await axios('/api/gg')
    })()
  },[])
  return (
    <main className="w-5/6 mx-auto">
      <Hero />
    </main>
  );
}

export default Index;
