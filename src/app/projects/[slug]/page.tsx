import { GetStaticPaths } from 'next';
import educationsData from '../../../../json/projects.json';
import Image from 'next/image'
import PageWrapper from '../../page-wrapper'
import { getLocalData } from '../../../lib/localProjectsData';

export default function Page({ params }: { params: { slug: string } }) {

  // Recherche de l'objet correspondant au slug dans educationsData
  const project = educationsData.find((item) => item.slug === params.slug);

  if (!project) {
    return <div>Projet introuvable</div>;
  }

  return (
    <div>
      <div>My Post: {project.slug}</div>
      <div>{project.content}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getLocalData();
 
  return posts.map((post:any) => ({
    slug: post.slug,
  }))
}
