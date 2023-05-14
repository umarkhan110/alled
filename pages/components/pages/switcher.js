import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React from 'react';
import PageHeader from '../../../shared/layout-components/pageheader/pageHeader';
const Switchers = dynamic(() => import("@/shared/data/pages/switcher-data/switchers"), {ssr: false,});

const SwitcherStyle1 = () => {

  return (
    <div className=''>
    <Seo title="Switcher Style-1"/>
      <PageHeader titles="Switcher Style-1" active="Switcher Style-1" items={['Switcher']} />

      {/* <!--Row--> */}
      <Switchers/>

      {/* <!--End Row--> */}

    </div>
  );
};
SwitcherStyle1.layout = "Switcherlayout";
export default SwitcherStyle1;
