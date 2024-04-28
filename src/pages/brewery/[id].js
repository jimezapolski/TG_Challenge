import { useRouter } from 'next/router';
import SingleBreweryContainers from '../../containers/SingleBreweryContainers'

const Brewery = () => {
  const router = useRouter();
  const { id } = router.query;

  return <SingleBreweryContainers id={id} />;
};

export default Brewery;