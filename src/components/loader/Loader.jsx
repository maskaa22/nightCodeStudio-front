import { Puff } from 'react-loader-spinner'

const Loader = () => {
  return (<Puff
    visible={true}
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="puff-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />);
  

};

export default Loader;
