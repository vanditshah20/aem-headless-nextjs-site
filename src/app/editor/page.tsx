import { fetchHeroFromAEM } from '@/lib/aem';
import EditorClient from './EditorClient';

export default async function EditorPage() {
  const hero = await fetchHeroFromAEM();
  return <EditorClient hero={hero} />;
}
