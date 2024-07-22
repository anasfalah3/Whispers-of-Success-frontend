import { useParams } from 'react-router-dom';
import PodcastDetails from '@/components/PodcastDetails';
import Episodes from '@/components/Episodes';

const Podcast = () => {
  const { id } = useParams();
  return (
    <div>
        <PodcastDetails id={id}/>
        <Episodes/>
    </div>
  );
};

export default Podcast;
