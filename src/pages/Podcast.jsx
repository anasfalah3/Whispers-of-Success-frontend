import { useParams } from 'react-router-dom';
import PodcastDetails from '@/components/PodcastDetails';

const Podcast = () => {
  const { id } = useParams();
  return (
    <div>
        <PodcastDetails id={id}/>
    </div>
  );
};

export default Podcast;
