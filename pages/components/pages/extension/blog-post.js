import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React from 'react';
import PageHeader from '../../../../shared/layout-components/pageheader/pageHeader';
const Blogposts = dynamic(() => import("@/shared/data/pages/blogposts"), {ssr: false,});

const BlogPost = () => {

  return (
  <div >
    <Seo title="Blog Post"/>
    <PageHeader titles="Blog Post" active="Blog Post" items={['Pages']} />
    <Blogposts/>
    
  </div>
);
};
BlogPost.layout = "Contentlayout";
export default BlogPost;
